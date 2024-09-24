import catchAsync from "../../utils/catchAsync";
import { RoomServices } from "./room.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { TRoom } from "./room.interface";

const createRoom = catchAsync(async (req, res, next) => {
  const room = req.body;
  const result = await RoomServices.createRoom(room);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room added successfully",
    data: result,
  });
});
const getSingleRoom = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await RoomServices.getRoomService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room retrieved successfully",
    data: result,
  });
});
const getRooms = catchAsync(async (req, res, next) => {
  const result = await RoomServices.getallRoomService();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room retrieved successfully",
    data: result,
  });
});
const updateRoom = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await RoomServices.updateRoomService(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room updated successfully",
    data: result,
  });
});

const deleteRoom = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await RoomServices.softDeleteRoomService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room Deleted successfully",
    data: result,
  });
});
export const roomController = {
  createRoom,
  getSingleRoom,
  getRooms,
  updateRoom,
  deleteRoom,
};
