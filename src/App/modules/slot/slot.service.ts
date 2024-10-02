import Mongoose from "mongoose";
import { Room } from "../room/room.model";
import { TSlot } from "./slot.interface";
import { slotModel } from "./slot.model";
import mongoose from "mongoose";
import { TBooking } from "../booking/booking.interface";
import slotCreator from "../../utils/slotCreator";
// Services For Creating a Slot
const createSlotService = async (payload: TSlot) => {
  try {
    const { room, date, startTime, endTime } = payload;
    const slotMeeting = await slotCreator(room, date, startTime, endTime);
    const result = await slotModel.create(slotMeeting);
    return result;
  } catch (error) {
    throw new Error("Problem in creating");
  }
};
// Services For Getting AllSlot
const getSlotService = async (payloads: any) => {
  try {
    let query: Partial<TSlot> = { isBooked: false };

    const searchSlots = await slotModel
      .find({ $or: [{ date: payloads.date, room: payloads.roomId }, query] })
      .populate("room");

    return searchSlots;
  } catch (error) {
    throw new Error("Query Not Found");
  }
};

export const SlotService = {
  createSlotService,
  getSlotService,
};
