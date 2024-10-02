import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { USER_ROLE } from "../modules/user/user.constans";
import catchAsync from "../utils/catchAsync";
import { Error } from "mongoose";
import config from "../config";
import { User } from "../modules/user/user.model";

///// Middleware for Authorization with jwt token

export const auth = (...requiredRoles: (keyof typeof USER_ROLE)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const access_tokenBearer = req.headers.authorization;
    const token = access_tokenBearer?.split(" ")[1];

    if (!token) {
      throw new Error("Your token are not authorized with this route");
    }
    const verify_token = jwt.verify(
      token as string,
      config.json_web_token as string
    );
    const { email, role } = verify_token as JwtPayload;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not exist");
    }
    if (!requiredRoles.includes(role)) {
      throw new Error("Your are not authorized with this route");
    }
    next();
  });
};
