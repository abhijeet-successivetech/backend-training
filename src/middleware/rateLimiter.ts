import { Request, Response, NextFunction } from "express";

export class RateLimiterMiddleware {
  private rateRecord: Map<string, number[]> = new Map();

  public rateLimiter(timeInterval: number, maxRequest: number) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const userIp = req.ip;
      const now = Date.now();

      if (!userIp) {
        res.status(404).json({ message: "IP is not available" });
        return;
      }

      if (!this.rateRecord.has(userIp)) {
        this.rateRecord.set(userIp, [now]);
        next();
        return;
      }

      const userTimeStamp = this.rateRecord.get(userIp);
      const timeDifference = userTimeStamp
        ? now - userTimeStamp[userTimeStamp.length - 1]
        : 0;

      userTimeStamp?.push(now);

      if (userTimeStamp && userTimeStamp.length <= maxRequest) {
        next();
        return;
      }

      if (timeDifference / 1000 > timeInterval) {
        next();
        return;
      }

      res.status(429).json({ message: "Error: too many requests" });
    };
  }
}
