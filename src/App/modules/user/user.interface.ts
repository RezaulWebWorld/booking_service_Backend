import { Schema } from "mongoose";
import { USER_ROLE } from "./user.constans";

type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: keyof typeof USER_ROLE;
};

type TLogin = {
  email: string;
  password: string;
};
export { TUser, TLogin };
