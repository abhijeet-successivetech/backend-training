import jwt from "jsonwebtoken";
import { Request,Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const auth = (req: Request, res: Response, next: NextFunction)=>{
    try{
        const token = req.headers.authorization?.split("")[1] || req?.cookies.token
        console.log(token);
        
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

        next();
    }
    catch(error){
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"something went wrong, while  verifying the token"
        })
    }
}

export const isAdmin = (req: Request , res: Response, next: NextFunction) => {
    try{
        if((req as any).user.role !== "admin" ){
            return res.status(401).json({
                success:false,
                message:"This route is for admin"
            })
        }
        return next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"error while matching route"
        })
    }
}

export const isUser = (req: Request, res: Response, next: NextFunction) => {
    try{
    if((req as any).user.role !== "user"){
        return res.status(401).json({
            success:false,
            message: "This Route is for users"
        })
    }
    return next();
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message:"Error while matching route"
        })
    }
}

export default auth;
