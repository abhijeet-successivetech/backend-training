import { Request, Response, NextFunction } from "express";


export const rateLimiterMiddleware = (timeInterval: number, maxRequest: number) => {

    const rateRecord =  new Map<string,number[]>();

    return function (req: Request,res: Response,next: NextFunction) {
        const userIp = req.ip;
        const now=Date.now();
        if(!userIp){
            return res.status(404).json({message: "Ip is not available"});

        }
        
        if(!rateRecord.has(userIp)){
            rateRecord.set(userIp,[now]);
            return next();
        }
        const userTimeStamp = rateRecord.get(userIp);
        const timeDifferenrce =userTimeStamp? now -userTimeStamp[userTimeStamp.length-1] :0
        userTimeStamp?.push(now);

        if(userTimeStamp && userTimeStamp.length <= maxRequest){
            return next();
        }
        if(timeDifferenrce/1000 > timeInterval) {
            return next();
        }
        return res.status(429).json({message:"Error too many requests"});
    }



}