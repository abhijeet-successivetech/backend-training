import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

export class GeoLocationValidator {
  public validate(allowedCountry: string) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const ip = req.headers["x-forwarded-for"] as string;

      const geo = geoip.lookup(ip);

      if (!geo || geo.country !== allowedCountry) {
        res.status(403).json({
          error: `Access denied: requests must be from ${allowedCountry}.`,
        });
        return;
      }

      next();
    };
  }
}
