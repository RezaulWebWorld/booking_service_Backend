import express from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "./user.validation";
import { auth } from "../../middleware/authorization";
import { USER_ROLE } from "./user.constans";

const userRouter = express.Router();

userRouter.post(
  "/signup",
  validateRequest(userValidation.userValidationSchema),
  userController.userRegistration
);
userRouter.post("/login", userController.userLogin);
// userRouter.get("/", userController.userBookingController);

export default userRouter;
