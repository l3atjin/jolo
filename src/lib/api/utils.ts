import { supabase } from "./index";
export async function getLocationId(
  locationName: string,
): Promise<string | null> {
  const { data: locationData, error } = await supabase
    .from("locations")
    .select("id")
    .eq("location_name", locationName);
  if (error || !locationData.length) {
    console.error("Error getting location ID for", locationName, error);
    return null;
  }
  return locationData[0].id;
}
