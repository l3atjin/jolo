import { supabase } from ".";
import { type Database } from "./types/supabase";
import { getLocationId } from "./utils";

export type DriverPostsResponse = Awaited<ReturnType<typeof fetchDriverPosts>>;
export type DriverPostResponse = DriverPostsResponse[0];
export type DriverPostInsert =
  Database["public"]["Tables"]["driver_posts"]["Insert"];

export type DriverRequestInsert =
  Database["public"]["Tables"]["driver_requests"]["Insert"];

/**
 * Fetches driver posts according to search
 * @param searchParams post search parameters
 * @returns list of driver posts
 */
export async function fetchDriverPosts(searchParams?: {
  departure?: string;
  destination?: string;
  date?: Date;
  seats?: number;
  sortBy?: "date" | "fee";
}) {
  // const { data: { user } } = await supabase.auth.getUser();
  let query = supabase.from("driver_posts").select(`
      id,
      date,
      author: profiles (full_name, avatar_url, phone_number),
      departure: locations!driver_posts_departure_id_fkey (location_name),
      destination: locations!driver_posts_destination_id_fkey (location_name),
      date,
      time,
      details,
      fee,
      seats,
      vehicle: vehicles (plate, make_model)
    `);

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
    console.error("Error fetching driver posts: ", error);
    throw error;
  }

  return data;
}

/**
 * Inserts a driver post
 * @param driverPost Driver post row insert type
 */
export async function insertDriverPost(
  driverPost: DriverPostInsert,
): Promise<void> {
  const { error } = await supabase.from("driver_posts").insert(driverPost);
  if (error) {
    throw error;
  }
  console.log(`row added`, driverPost);
}

export async function insertDriverRequest(
  driverRequest: DriverRequestInsert,
): Promise<void> {
  const { error } = await supabase
    .from("driver_requests")
    .insert(driverRequest);
  if (error) {
    throw error;
  }
  console.log(`row added`, driverRequest);
}
