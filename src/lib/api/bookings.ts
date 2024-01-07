import { supabase } from ".";
import { type Database } from "./types/supabase";

export type BookingInsert = Database["public"]["Tables"]["bookings"]["Insert"];
export type BookingsRequestResponse = Awaited<
  ReturnType<typeof fetchRiderRequests>
>;
export type BookingsResponse = Awaited<ReturnType<typeof fetchRiderBookings>>;

// fetches all requested bookings
export async function fetchRiderRequests() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const query = supabase
      .from("bookings")
      .select(
        `
        id,
        post_details: driver_posts (*)
        rider_id
      `,
      )
      .eq("rider_id", user?.id)
      .eq("status", "REQUESTED");

    const { data, error } = await query;

    console.log(JSON.stringify(data, null, 2));

    if (error) {
      console.error("Error fetching rider requests: ", error);
      throw error;
    }

    return data;
  } else {
    console.error("User not logged in!");
  }
}

// updates the row, confirms a booking
export async function acceptRequest(bookingId: number): Promise<void> {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "CONFIRMED" })
    .eq("id", bookingId);
  // 2. Return the updated booking
  if (error) {
    console.error("Error accepting a request: ", error);
    throw error;
  }
}

// updates the row, rejects a booking
export async function rejectRequest(bookingId: number) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "REJECTED" })
    .eq("id", bookingId);
  // 2. Return the updated booking
  if (error) {
    console.error("Error rejecting a request: ", error);
    throw error;
  }
}

// inserts a new booking row with "REQUESTED" status
export async function insertBooking(request: BookingInsert): Promise<void> {
  const { error } = await supabase.from("bookings").insert(request);
  if (error) {
    throw error;
  }
  console.log(`row added`, request);
}

// fetches all CONFIRMED bookings of rider
export async function fetchRiderBookings() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const query = supabase
      .from("bookings")
      .select("*")
      .eq("rider_id", `${user.id}`)
      .eq("status", "CONFIRMED");

    const { data, error } = await query;

    console.log(JSON.stringify(data, null, 2));

    if (error) {
      console.error("Error fetching bookings: ", error);
      throw error;
    }

    return data;
  } else {
    console.error("User not logged in!");
  }
}
