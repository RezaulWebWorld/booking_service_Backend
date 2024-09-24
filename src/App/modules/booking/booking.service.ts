import jwt from "jsonwebtoken";
import mongoose, { ObjectId } from "mongoose";
import { Room } from "../room/room.model";
import { slotModel } from "../slot/slot.model";
import { TBooking } from "./booking.interface";
import { bookingModel } from "./booking.model";
import { User } from "../user/user.model";
import { any } from "zod";
import { TUser } from "../user/user.interface";

const createBooking = async (payload: TBooking) => {
  const slotLength = payload.slots.length;
  const room = await Room.findById(payload.room);
  const price = room?.pricePerSlot;
  const totalPrice = (price as number) * slotLength;

  const newRoom = await Room.findById(payload.room);
  const newUser = await User.findById(payload.user);
  const newSlots = payload.slots.map((e) =>
    slotModel.findByIdAndUpdate(e, { isBooked: true, new: true }).exec()
  );

  const slots = await Promise.all(newSlots);
  const newPayload = {
    date: payload.date,
    slots: slots,
    room: newRoom,
    user: newUser,
    totalAmount: totalPrice,
  };
  const bookingData = await bookingModel.create(newPayload);
  return bookingData;
};
const getBookingService = async () => {
  const allBookings = await bookingModel.find();
  return allBookings;
};

const updateBookingService = async (
  id: string,
  payloads: Partial<TBooking>
) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const bookingId = await bookingModel.findById(id);
    if (!bookingId) {
      throw new Error("There is no Id");
    }
    const updatedBookings = await bookingModel.findByIdAndUpdate(id, payloads, {
      new: true,
      session,
    });
    await session.commitTransaction();
    await session.endSession();
    return updatedBookings;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("Failed to Update");
  }
};
const softDeleteBooking = async (_id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const bookingId = await bookingModel.findOne({ _id });
    const deleted = await bookingModel.findOne({ isDeleted: true });
    if (deleted) {
      throw new Error("The Booking is Already Deleted");
    }
    if (!bookingId) {
      throw new Error(" No Booking found to Delete");
    }

    const result = await bookingModel.findByIdAndUpdate(
      bookingId,
      { isDeleted: true },
      { new: true, session }
    );
    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("Failed to Delete");
  }
};

const getUserBooking = async (payload: Partial<TUser>) => {
  const newUser = payload.email;
  const userTwo = await User.findOne({ email: newUser });
  console.log("UserTwo", userTwo?.email);
  const getUserBooked = await bookingModel
    .find()
    .populate("slots")
    .populate("room")
    .populate("user")
    .exec();

  const allNewBookings: Partial<TBooking> = {};
  // const userId = userIdArr[0].toString();
  // const resultId = userId.split("new")[0];

  try {
    const targetUser = getUserBooked.filter((e: any) => {
      if (e.user.email === payload.email) {
        return e;
      }
    });
    return targetUser;
  } catch (error) {
    console.log(error);
  }
};
export const bookingService = {
  createBooking,
  getBookingService,
  updateBookingService,
  softDeleteBooking,
  getUserBooking,
};
