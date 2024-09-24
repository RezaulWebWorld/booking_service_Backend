import { Room } from "./../room/room.model";
import mongoose, { model, Schema } from "mongoose";
import { TSlot } from "./slot.interface";

const slotSchema = new Schema<TSlot>({
  room: { type: Schema.Types.ObjectId, ref: "Room", required: true },
  date: { type: String, required: true },
  startTime: { type: String },
  endTime: { type: String },
  isBooked: { type: Boolean, default: false },
});

export const slotModel = model<TSlot>("slot", slotSchema);
