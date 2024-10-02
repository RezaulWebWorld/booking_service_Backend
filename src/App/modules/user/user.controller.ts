import httpStatus from "http-status";
import {
  NextFunction,
  Request,
  RequestHandler,
  response,
  Response,
} from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import config from "../../config";

const userRegistration = catchAsync(async (req, res, next) => {
  const user = req.body;
  const result = await UserServices.createUserDb(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

const userLogin = catchAsync(async (req, res, next) => {
  const { userData, token, refreshToken } = await UserServices.userLogin(
    req.body
  );
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.node_development === "production",
  });

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "User logged in successfully",
    token: token,
    data: userData,
  });
});

const userBookingController = catchAsync(async (req, res, next) => {
  const user = req.body;
  const result = await UserServices.getAuthUserBookingService(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking Retrieved",
    data: result,
  });
});
export const userController = {
  userRegistration,
  userLogin,
  userBookingController,
};
