import { supabase } from ".";
import { Database } from "./types/supabase";

export type RiderPostInsert =
  Database["public"]["Tables"]["rider_posts"]["Insert"];

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
