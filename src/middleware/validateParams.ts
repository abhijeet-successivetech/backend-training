import Joi from "joi";
import { Request, Response } from "express";

export const paramSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  age: Joi.number().required()
});


export const validateParam = (req: Request , res: Response) => {
    const {error} = paramSchema.validate(req.body);
    if (error) {
    return res.status(400).json({
      status: "error",
      message: error.details[0].message,
    });
  }
  else{
    res.status(200).json({
        message: "Passed"
    })
  }

}