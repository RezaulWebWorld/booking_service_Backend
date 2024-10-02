import { NextFunction, Request, Response } from "express";

//// Middleware for Global Error Handler
const globalErrorHandeler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message =
    error.message || "Oops! Something wrong ,catch the error and solve it";

  return res.status(statusCode).json({
    success: false,
    message,
    error: error,
  });
};

export default globalErrorHandeler;
