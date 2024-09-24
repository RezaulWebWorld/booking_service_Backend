import express from "express";
import { bookingController } from "./booking.controller";
import { auth } from "../../middleware/authorization";
import { USER_ROLE } from "../user/user.constans";

const bookingRouter = express.Router();
const userBookingRouter = express.Router();

bookingRouter.post(
  "/",
  auth(USER_ROLE.user),
  bookingController.createBookingController
);
bookingRouter.get(
  "/",
  auth(USER_ROLE.admin),
  bookingController.getBookingController
);
userBookingRouter.get(
  "/",
  auth(USER_ROLE.user),
  bookingController.getUserBookingController
);
bookingRouter.put("/:id", bookingController.updatedBookingController);
bookingRouter.delete("/:id", bookingController.deleteBookingController);

export { bookingRouter, userBookingRouter };
