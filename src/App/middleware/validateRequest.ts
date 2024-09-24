import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";
import { NextFunction, Request, Response } from "express";
//// Middleware Validate req

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const parseBody = await schema.parseAsync({
      body: req.body,
    });

    req.body = parseBody.body;
    next();
  });
};

export default validateRequest;
