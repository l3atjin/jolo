import { supabase } from ".";
import { type Database } from "./types/supabase";
import { getLocationId } from "./utils";

export type RiderPostInsert =
  Database["public"]["Tables"]["rider_posts"]["Insert"];

export type RiderPostsResponse = Awaited<ReturnType<typeof fetchRiderPosts>>;
export type RiderPostResponse = RiderPostsResponse[0];

/**
 * Insert a new rider post
 * @param riderPost
 */
export async function insertRiderPost(
  riderPost: RiderPostInsert,
): Promise<void> {
  const { error } = await supabase.from("rider_posts").insert(riderPost);

  if (error) {
    throw error;
  }
}

/**
 * Fetch rider posts
 * @param searchParams
 */
export async function fetchRiderPosts(searchParams?: {
  departure?: string;
  destination?: string;
  date?: Date;
  seats?: number;
  sortBy?: "date" | "fee";
}) {
  // const { data: { user } } = await supabase.auth.getUser();
  let query = supabase.from("rider_posts").select(`
      id,
      date,
      author: profiles (full_name, avatar_url, phone_number),
      departure: locations!rider_posts_departure_id_fkey (location_name),
      destination: locations!rider_posts_destination_id_fkey (location_name),
      date,
      time,
      details
    `);
  console.log("Search pressed with the following params", searchParams);

  if (searchParams != null) {
    if (searchParams.departure) {
      const departureID = await getLocationId(searchParams.departure);
      if (departureID) query = query.eq("departure_id", departureID);
    }

    if (searchParams.destination) {
      const destinationID = await getLocationId(searchParams.destination);
      if (destinationID) query = query.eq("destination_id", destinationID);
    }

    if (searchParams.seats) {
      query = query.gte("seats", searchParams.seats);
    }

    if (searchParams.sortBy) {
      query = query.order(searchParams.sortBy, { ascending: false });
    }
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching rider posts: ", error);
    throw error;
  }

  return data;
}
