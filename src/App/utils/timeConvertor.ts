import { JwtPayload } from "jsonwebtoken";
import { TRoom } from "../modules/room/room.interface";
import { TBooking } from "../modules/booking/booking.interface";
import { Room } from "../modules/room/room.model";
const minuteConverter = (time: string | undefined) => {
  if (!time) {
    throw new Error("Time is undefined or invalid");
  }
  const [hour, minute] = time.split(":").map(Number);
  const newMinutes = hour * 60 + minute;
  return newMinutes;
};

const stringConverter = (convertedTime: number) => {
  const convertedMinute = convertedTime % 60;
  const convertedHour = (convertedTime - convertedMinute) / 60;
  return `${convertedHour.toString().padStart(2, "0")}: ${convertedMinute
    .toString()
    .padStart(2, "0")}`;
};

export { minuteConverter, stringConverter };
