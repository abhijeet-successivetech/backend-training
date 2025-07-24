import Joi from "joi";
import { Request, Response } from "express";

export class ParamValidator {
  private paramSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    age: Joi.number().required(),
  });

  public validate = (req: Request, res: Response): void => {
    const { error } = this.paramSchema.validate(req.body);

    if (error) {
      res.status(400).json({
        status: "error",
        message: error.details[0].message,
      });
      return;
    }

    res.status(200).json({
      message: "Passed",
    });
  };
}
