import { Request, Response, NextFunction } from "express";

interface ErrorWithStatus {
  statusCode: number;
  message: string;
}

export class FrequentErrorTrigger {
  public trigger(paramName: string) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const errorName = req.params[paramName];
      let statusCode: number;
      let message: string;

      switch (errorName) {
        case "BadRequest":
          statusCode = 400;
          message = "400 Bad Request simulated by middleware";
          break;
        case "Unauthorized":
          statusCode = 401;
          message = "401 Unauthorized simulated by middleware";
          break;
        case "Forbidden":
          statusCode = 403;
          message = "403 Forbidden simulated by middleware";
          break;
        case "NotFound":
          statusCode = 404;
          message = "404 Not Found simulated by middleware";
          break;
        case "TooManyRequests":
          statusCode = 429;
          message = "429 Too Many Requests simulated by middleware";
          break;
        default:
          res.status(400).json({ error: `Unknown error: ${errorName}` });
          return;
      }

      const error: ErrorWithStatus = { statusCode, message };
      next(error);
    };
  }
}
