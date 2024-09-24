import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { USER_ROLE } from "../modules/user/user.constans";
import catchAsync from "../utils/catchAsync";
import { Error } from "mongoose";
import config from "../config";
import { User } from "../modules/user/user.model";
import { error } from "console";

export const auth = (...requiredRoles: (keyof typeof USER_ROLE)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const access_tokenBearer = req.headers.authorization;
    const access_token = access_tokenBearer?.split(" ")[1];

    if (!access_token) {
      throw new Error("Your access token are not authorized with this route");
    }
    const verify_token = jwt.verify(
      access_token as string,
      config.json_web_token as string
    );
    console.log(verify_token);
    const { email, role } = verify_token as JwtPayload;
    console.log(role);
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
