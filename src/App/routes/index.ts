import { Router } from "express";
import userRouter from "../modules/user/user.route";
import roomRouter from "../modules/room/room.route";
import slotRouter from "../modules/slot/slot.route";
import {
  bookingRouter,
  userBookingRouter,
} from "../modules/booking/booking.route";

const routes = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRouter,
  },
  {
    path: "/my-bookings",
    route: userBookingRouter,
  },
  {
    path: "/slots",
    route: slotRouter,
  },
  {
    path: "/rooms",
    route: roomRouter,
  },
  {
    path: "/bookings",
    route: bookingRouter,
  },
];

moduleRoutes.forEach((router) => routes.use(router.path, router.route));

export default routes;
