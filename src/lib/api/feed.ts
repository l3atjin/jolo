import { type Database } from "../supabase";
import { supabase } from "./supabase";

export type DriverPostType =
  Database["public"]["Tables"]["driver_posts"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Location = Database["public"]["Tables"]["locations"]["Row"];

export async function fetchDriverPosts(): Promise<DriverPostType[]> {
  // const { data: { user } } = await supabase.auth.getUser();
  const query = supabase.from("driver_posts").select(`
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

  const { data, error } = await query.returns<
    Array<
      DriverPostType & {
        author: Profile;
        departure_location: Location;
        destination_location: Location;
      }
    >
  >();

  if (error) {
    console.log("Error fetching rider posts: ", error);
    throw error;
  }

  return data;
}
