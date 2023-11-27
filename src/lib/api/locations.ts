import { supabase } from "./index";

/**
 * Fetch locaitons from database
 * @returns list of location rows
 */
export async function fetchLocations() {
  const { data, error } = await supabase.from("locations").select();

  if (error) throw error;
  return data;
}
