import express from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "./user.validation";

const userRouter = express.Router();

userRouter.post(
  "/signup",
  validateRequest(userValidation.userValidationSchema),
  userController.userRegistration
);
userRouter.post("/login", userController.userLogin);

export default userRouter;
