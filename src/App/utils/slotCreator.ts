import { Schema } from "mongoose";
import { TSlot } from "../modules/slot/slot.interface";
import { minuteConverter, stringConverter } from "./timeConvertor";

const slotCreator = async (
  room: Schema.Types.ObjectId,
  date: string,
  startTime: string,
  endTime: string
) => {
  const initialSlot = [];

  let initialStartTime = await minuteConverter(startTime);
  const finalEndTime = await minuteConverter(endTime);
  const slotDuration = 60;

  if (finalEndTime > initialStartTime) {
    while (initialStartTime < finalEndTime) {
      let initialEndTime = initialStartTime + slotDuration;
      initialSlot.push({
        room: room,
        date: date,
        startTime: stringConverter(initialStartTime),
        endTime: stringConverter(initialEndTime),
      });
      initialStartTime = initialEndTime;
    }
    return initialSlot;
  } else {
    throw new Error("Initial Start Time is Bigger then End Time");
  }
};
export default slotCreator;
