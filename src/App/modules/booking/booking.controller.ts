import jwt from "jsonwebtoken";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookingService } from "./booking.service";
import { bookingModel } from "./booking.model";
import config from "../../config";
import { TUser } from "../user/user.interface";
// Booking Controller for Create a Booking
const createBookingController = catchAsync(async (req, res, next) => {
  try {
    const result = await bookingService.createBooking(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All bookings retrieved successfully",
      data: result,
    });
  } catch (error) {
    throw new Error("You have Errors");
  }
});
// Booking Controller for get all Booking
const getBookingController = catchAsync(async (req, res, next) => {
  try {
    const result = await bookingService.getBookingService();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All bookings Created successfully",
      data: result,
    });
  } catch (error) {
    throw new Error("You have Errors");
  }
});
// Booking Controller for updating Booking with id
const updatedBookingController = catchAsync(async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await bookingService.updateBookingService(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Booking updated successfully",
      data: result,
    });
  } catch (error) {
    throw new Error("You have Errors");
  }
});
// Booking Controller for deleting Booking with id
const deleteBookingController = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await bookingService.softDeleteBooking(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking deleted successfully",
    data: result,
  });
});
// Booking Controller for get authentic user all Booking
const getUserBookingController = catchAsync(async (req, res, next) => {
  const access_tokenBearer = req.headers.authorization;
  const access_token = access_tokenBearer?.split(" ")[1];

  if (!access_token) {
    throw new Error("Your access token are not authorized with this route");
  }
  const verify_token = jwt.verify(
    access_token as string,
    config.json_web_token as string
  );

  const result = await bookingService.getUserBooking(
    verify_token as Partial<TUser>
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Booking Retrieved successfully",
    data: result,
  });
});

export const bookingController = {
  createBookingController,
  getBookingController,
  updatedBookingController,
  deleteBookingController,
  getUserBookingController,
};
