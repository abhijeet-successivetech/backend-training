import { Request, Response, NextFunction } from "express";

interface ErrorType extends Error {
  statusCode?: number;
}

export class ErrorHandler {
  public handle = (err: ErrorType, req: Request, res: Response, next: NextFunction): void => {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || "Something went wrong";

    res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
    });
  };
}
