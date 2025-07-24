import { Request, Response, NextFunction } from "express";
import { validationConfig } from "../config/validationConfig.js";
import Joi from "joi";

export class DynamicValidator {
  public validate = (req: Request, res: Response, next: NextFunction): void => {
    const routePath = req.route?.path;
    const schema: Joi.ObjectSchema | undefined = validationConfig[routePath];

    if (!schema) {
      next();
      return;
    }

    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      res.status(400).json({
        status: false,
        message: error.details.map((detail) => detail.message).join(", "),
      });
      return;
    }

    req.body = value;
    next();
  };
}
