import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "defaultsecret";

const authenticateJWT = (
  req: Request & { user?: string | jwt.JwtPayload },
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
       return res.sendStatus(401);
    }
    const decoded = jwt.verify(authHeader, SECRET_KEY);
    req.user = decoded; 
    next();
  } catch (err) {
     next(err); 
  }
};

export default authenticateJWT;
