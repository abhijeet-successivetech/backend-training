import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

export interface AuthRequest extends Request {
  user?: string | jwt.JwtPayload;
}

export default class AuthMiddleware {
  static authenticate(req: AuthRequest, res: Response, next: NextFunction): void {
    try {
      const token =
        req.body.token ||
        req.cookies?.token ||
        req.header("Authorization")?.replace("Bearer ", "");

      if (!token) {
        res.status(401).json({
          success: false,
          message: "Token missing",
        });
        return;
      }

      try {
        const payload = jwt.verify(token, process.env.SECRET_KEY as string);
        req.user = payload;
      } catch (error) {
        res.status(401).json({
          success: false,
          message: "Token is invalid",
        });
        return;
      }

      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong while verifying the token.",
      });
    }
  }
}
