import { type RiderPostform } from "./../../components/createPost/RiderPostForm";
import { supabase } from "./index";
import { getLocationId, insertIntoTable } from "./utils";

export async function insertDriverPost(params: RiderPostform): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const departureId = await getLocationId(params.departure);
    const destinationId = await getLocationId(params.destination);
    const time = params.time.toLocaleTimeString();

    const newData = {
      user_id: user.id,
      departure_location_id: departureId,
      destination_location_id: destinationId,
      available_seats: params.availableSeats,
      fee: params.fee,
      description: params.description,
      ...(params.timeOfDay !== "Цаг оруулах" && {
        time_of_day: params.timeOfDay,
      }),
      departure_day: params.date,
      ...(params.timeOfDay === "Цаг оруулах" && {
        departure_time: params.exactTime.toTimeString().split(" ")[0],
      }),
    };
    await insertIntoTable("posts", newData);

    console.log("inserted ", newData);
  } else {
    // handle case where no user is logged in
    console.error("No user logged in");
  }
}

export async function insertRiderPost(params: RiderPostform): Promise<void> {
  console.log("PARAMS ARE:", params);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("user id is", user?.id);

  if (user) {
    const departureId = await getLocationId(params.departure);
    const destinationId = await getLocationId(params.destination);

    const time = params.time.toLocaleTimeString();
    console.log("Time is", params.time.toTimeString().split(" ")[0]);
    console.log("Type is", time);

    const newData = {
      user_id: user.id,
      departure_id: departureId,
      destination_id: destinationId,
      details: params.details,
      date: params.date,
      time: params.time.toTimeString().split(" ")[0],
    };
    console.log(JSON.stringify(newData, null, 2));
    await insertIntoTable("requests", newData);

    console.log("inserted ", newData);
  } else {
    // handle case where no user is logged in
    console.error("No user logged in");
  }
}
