import { Request, Response, NextFunction } from 'express';
import geoip from "geoip-lite";


export function validateGeoLocation(allowedCountry: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = (req.headers['x-forwarded-for'] as string);
  
    
    const geo = geoip.lookup(ip);

    if (!geo || geo.country !== allowedCountry) {
      return res.status(403).json({
        error: `Access denied: requests must  from ${allowedCountry}.`,
      });
    }

    next();
  };
}
