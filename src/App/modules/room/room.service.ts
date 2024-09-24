import { JwtPayload } from "jsonwebtoken";
import { TRoom } from "./room.interface";
import { Room } from "./room.model";
import mongoose from "mongoose";
import { setEngine } from "crypto";

const createRoom = async (payload: TRoom) => {
  const roomName = await Room.findOne({ name: payload.name });
  const roomNumber = await Room.findOne({ roomNo: payload.roomNo });
  if (roomName) {
    throw new Error(" Ops room name is Already Created");
  }
  if (roomNumber) {
    throw new Error(" Sorry Room Number exist");
  }
  const result = await Room.create(payload);
  return result;
};
const getRoomService = async (_id: string) => {
  const roomid = await Room.findOne({ _id });

  if (!roomid) {
    throw new Error(" No Room Found");
  }

  const result = await Room.findOne({ _id: roomid });
  return result;
};
const getallRoomService = async () => {
  const allRoomInfo = await Room.find({ isDeleted: false });

  return allRoomInfo;
};
const updateRoomService = async (_id: string, payload: TRoom) => {
  const roomId = await Room.findOne({ _id });

  if (!roomId) {
    throw new Error(" No Room Found to Update");
  }

  const result = await Room.findByIdAndUpdate({ _id }, payload);

  return result;
};

const softDeleteRoomService = async (_id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const roomId = await Room.findOne({ _id });
    const deleted = await Room.findOne({ isDeleted: true });
    if (deleted) {
      throw new Error("This Room is Already Deleted");
    }
    if (!roomId) {
      throw new Error(" No Room Found to Delete");
    }

    const result = await Room.findByIdAndUpdate(
      roomId,
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

export const RoomServices = {
  createRoom,
  getRoomService,
  getallRoomService,
  updateRoomService,
  softDeleteRoomService,
};
