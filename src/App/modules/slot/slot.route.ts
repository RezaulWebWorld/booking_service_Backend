import express from "express";
import { slotController } from "./slot.controller";
import { auth } from "../../middleware/authorization";
import { USER_ROLE } from "../user/user.constans";

const slotRouter = express.Router();

slotRouter.post("/", auth(USER_ROLE.admin), slotController.createSlot);
slotRouter.get("/availability", slotController.getSlot);

export default slotRouter;
