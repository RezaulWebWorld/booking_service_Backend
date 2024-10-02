import { Date, ObjectId } from "mongoose";

export type TBooking = {
  slots: ObjectId[];
  room: ObjectId;
  user: ObjectId;
  date: Date;
  totalAmount: number;
  isConfirmed: "confirmed" | "unconfirmed" | "canceled";
  isDeleted: boolean;
};
