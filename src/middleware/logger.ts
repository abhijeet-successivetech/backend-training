import { Request, Response, NextFunction } from "express";

export class LoggerMiddleware {
  public logRequest = (req: Request, res: Response, next: NextFunction): void => {
    console.log("Request method:", req.method);
    console.log("Request URL:", req.url);
    console.log("Request date:", new Date());
    next();
  };
}
