import { Date } from "mongoose";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SlotService } from "./slot.service";
import { TSlot } from "./slot.interface";

const createSlot = catchAsync(async (req, res, next) => {
  const slot = req.body;
  console.log("Body", req.body);
  const result = await SlotService.createSlotService(slot);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots created successfully",
    data: result,
  });
});
const getSlot = catchAsync(async (req, res, next) => {
  const result = await SlotService.getSlotService(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots retrieved successfully",
    data: result,
  });
});

export const slotController = {
  createSlot,
  getSlot,
};
