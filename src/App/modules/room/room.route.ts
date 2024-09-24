import express from "express";
import { roomController } from "./room.controller";
import { auth } from "../../middleware/authorization";
import { USER_ROLE } from "../user/user.constans";
const roomRouter = express.Router();
// for admin auth(USER_ROLE.admin),
roomRouter.post("/", auth(USER_ROLE.admin), roomController.createRoom);
roomRouter.get("/", roomController.getRooms);
roomRouter.get("/:id", roomController.getSingleRoom);
roomRouter.put("/:id", auth(USER_ROLE.admin), roomController.updateRoom);
roomRouter.delete("/:id", auth(USER_ROLE.admin), roomController.deleteRoom);

export default roomRouter;
