import { supabase } from ".";

export type DriverPostsResponse = Awaited<ReturnType<typeof fetchDriverPosts>>;
export type DriverPostResponse = DriverPostsResponse[0];

export async function fetchDriverPosts(searchParams?: {
  departureId?: string;
  destinationId?: string;
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
    if (searchParams.departureId) {
      query = query.eq("departure_id", searchParams.departureId);
    }

    if (searchParams.destinationId) {
      query = query.eq("destination_id", searchParams.destinationId);
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
