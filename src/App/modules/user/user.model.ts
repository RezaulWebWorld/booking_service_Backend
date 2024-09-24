import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcryptjs from "bcryptjs";
import config from "../../config";
import { USER_ROLE } from "./user.constans";

export const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      enum: Object.keys(USER_ROLE),
    },
  },
  {
    timestamps: true,
  }
);

// *******Middleware***
userSchema.pre("save", async function (next) {
  const user = this;
  console.log(user, "user");
  user.password = await bcryptjs.hash(
    user.password,
    Number(config.bycrypt_salts)
  );
  next();
});
userSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<TUser>("User", userSchema);
