import { z } from "zod";
import { USER_ROLE } from "./user.constans";

const userValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3, { message: "Must be 3 or more characters long" }),

    email: z
      .string({
        required_error: "Email is required",
      })
      .email({ message: " Please enter a valid email address" }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, { message: "Must be minimum 6 characters" })
      .max(20, { message: "Maximum 20 " }),
    phone: z.string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone number  must be a number",
    }),
    address: z.string({
      required_error: "Name is required",
    }),
    role: z.nativeEnum(USER_ROLE),
  }),
});

export const userValidation = {
  userValidationSchema,
};
