import { supabase } from ".";

export async function getLocationName(locationId: string) {
  const { data, error } = await supabase
    .from("locations")
    .select("location_name")
    .eq("id", locationId);

  if (error || !data || data.length == 0) {
    console.error("Error getting location name for", locationId, error);
    return null;
  }

  return data[0].location_name;
}
