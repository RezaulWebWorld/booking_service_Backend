import { model, Schema } from "mongoose";
import { TRoom } from "./room.interface";

const roomSchema = new Schema<TRoom>(
  {
    name: {
      type: String,
      unique: true,
    },
    roomNo: { type: Number, unique: true },
    floorNo: { type: Number },
    capacity: { type: Number },
    pricePerSlot: { type: Number },
    amenities: { type: [] },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Room = model<TRoom>("Room", roomSchema);
