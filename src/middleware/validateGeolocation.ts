import { Request, Response, NextFunction } from 'express';
import geoip from "geoip-lite";


export function validateGeoLocation(allowedCountry: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    
    try{
    const reqIp = req.socket.remoteAddress;

    if(reqIp  === "::1"){
      return next();
    }

    const geo = reqIp?geoip.lookup(reqIp):"";
    
    if (!geo || geo.country !== allowedCountry) {
      return res.status(403).json({
        error: `Access denied: requests must  from ${allowedCountry}.`,
      });
    }

   return  next();
  }
  catch(error){
    return next(error);
  }
  };
}
