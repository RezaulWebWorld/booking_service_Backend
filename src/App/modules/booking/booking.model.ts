import { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";
import { BOOKING_STATUS } from "./booking.constans";

const bookingSchema = new Schema<TBooking>({
  room: { type: Schema.Types.ObjectId, ref: "Room" },
  slots: [{ type: Schema.Types.ObjectId, ref: "slot" }],
  user: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: Date },
  totalAmount: { type: Number },
  isConfirmed: {
    type: String,
    enum: Object.keys(BOOKING_STATUS),
    default: BOOKING_STATUS.unconfirmed,
  },
  isDeleted: { type: Boolean, default: false },
});

export const bookingModel = model<TBooking>("booking", bookingSchema);
