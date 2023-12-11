import { supabase } from ".";

export async function fetchRiderRequests() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const query = supabase
      .from("rider_requests")
      .select(
        `
        id,
        driver_info: profiles (full_name, avatar_url, phone_number),
        post_details: rider_posts (user_id, departure_id, destination_id, date)
      `,
      )
      .eq("post_details.user_id", `${user.id}`)
      .eq("status", "REQUESTED");

    const { data, error } = await query;
    console.log("in fetchRiderReq");
    console.log(JSON.stringify(data, null, 2));

    if (error) {
      console.error("Error fetching driver posts: ", error);
      throw error;
    }

    return data;
  } else {
    console.error("User not logged in!");
  }
}
