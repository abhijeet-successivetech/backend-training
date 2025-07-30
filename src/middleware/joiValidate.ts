import { Request, Response, NextFunction } from "express";

import { UserSchema } from "../utils/UserSchema";

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = UserSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      message: error.details[0].message,
    });
  }

  next();
};
