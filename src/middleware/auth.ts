import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "defaultsecret";

interface AuthenticatedRequest extends Request {
  user?: string | jwt.JwtPayload;
}

export class JWTAuthenticator {
  public authenticate = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        res.sendStatus(401);
        return;
      }

      const decoded = jwt.verify(authHeader, SECRET_KEY);
      req.user = decoded;

      next();
    } catch (err) {
      next(err);
    }
  };
}
