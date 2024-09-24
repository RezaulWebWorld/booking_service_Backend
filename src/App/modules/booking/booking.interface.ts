import { Date, ObjectId } from "mongoose";

export type TBooking = {
  room: ObjectId;
  slots: ObjectId[];
  user: ObjectId;
  date: Date;
  totalAmount: number;
  isConfirmed: "confirmed" | "unconfirmed" | "canceled";
  isDeleted: boolean;
};
