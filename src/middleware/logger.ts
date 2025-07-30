import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Request method:",req.method);
  console.log("Request URL:", req.url);
  console.log("Request date:", new Date());
  return next();
};

export default logger;
