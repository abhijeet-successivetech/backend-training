import jwt from "jsonwebtoken";
import { Request,Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const auth = (req: Request, res: Response, next: NextFunction)=>{
    try{
        const token = req.body.token || req.cookies.token || req.header("Authorization")?.replace("Bearer ","");

        if(!token){
            return res.status(201).json({
                success: false,
                message:"Token missing"
            });
        }
        try{
            const payload = jwt.verify(token, process.env.SECRET_KEY as string);
            console.log(payload);
            (req as any).user = payload;
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:"token is invalid"
            });
        }

        return next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"something went wrong, while  verifying the token"
        })
    }
}

export default auth;
