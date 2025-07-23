import { Request, Response, NextFunction } from "express";
import { validationConfig } from "../config/validationConfig.js";

export const dynamicValidate = (req: Request, res: Response, next: NextFunction) => {
  const routePath = req.route?.path;
  const schema = validationConfig[routePath];

  
  if (!schema) return next();

  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    return res.status(400).json({
      status: false,
    });
  }
  
  req.body = value; 
 
  next();
};
