import { Request, Response, NextFunction } from "express";
import { userSchema } from "../models/userSchema";

export class UserValidator {
  public validate = (req: Request, res: Response, next: NextFunction): void => {
    const { error } = userSchema.validate(req.body);

    if (error) {
      res.status(400).json({
        status: "error",
        message: error.details[0].message,
      });
      return;
    }

    next();
  };
}
