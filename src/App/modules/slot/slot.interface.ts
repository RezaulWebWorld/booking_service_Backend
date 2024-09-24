import { ObjectId } from "mongoose";

export type TSlot = {
  room: ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
};
