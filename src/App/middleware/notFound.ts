import { NextFunction, Response, Request } from "express";
import httpStatus from "http-status";

//// Middleware for Api Not Found
const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: " Api not Found",
  });
};

export default notFound;
