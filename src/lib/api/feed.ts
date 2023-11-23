import { type Database } from "../supabase";
import { supabase } from "./supabase";
import { getLocationId } from "./utils";

export type DriverPost = Database["public"]["Tables"]["driver_posts"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Location = Database["public"]["Tables"]["locations"]["Row"];

export type RequestResponse = Awaited<ReturnType<typeof fetchDriverPosts>>;

export type DriverPostType = Array<
  DriverPost & {
    author: Profile;
    departure: Location;
    destination: Location;
  }
>;

export async function fetchDriverPosts(searchParams?: {
  departure?: string;
  destination?: string;
  date?: Date;
  seats?: number;
  sortBy?: "departure_day";
}): Promise<DriverPostType> {
  // const { data: { user } } = await supabase.auth.getUser();
  let query = supabase.from("driver_posts").select(`
      id,
      date,
      author: profiles (full_name, avatar_url, phone_number),
      departure:locations!driver_posts_departure_id_fkey (location_name),
      destination:locations!driver_posts_destination_id_fkey (location_name),
      time,
      details,
      fee,
      seats
    `);

  if (searchParams != null) {
    if (searchParams.departure) {
      const departureId = await getLocationId(searchParams.departure);
      query = query.eq("departure_id", departureId);
    }

    if (searchParams.destination) {
      const destinationId = await getLocationId(searchParams.destination);
      query = query.eq("destination_id", destinationId);
    }

    if (searchParams.seats) {
      query = query.gte("seats", searchParams.seats);
    }

    if (searchParams.sortBy) {
      query = query.order(searchParams.sortBy, { ascending: false });
    }
  }

  const { data, error } = await query.returns<
    Array<
      DriverPostType & {
        author: Profile;
        departure: Location;
        destination: Location;
      }
    >
  >();

  console.log(JSON.stringify(data, null, 2));
  console.log("fetched data is", JSON.stringify(data, null, 2));
  if (error) {
    console.log("Error fetching driver posts: ", error);
    throw error;
  }

  return data;
}
