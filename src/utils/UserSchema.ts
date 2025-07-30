import Joi from "joi";

export const UserSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{7,30}$")).required(),
});

export const RegisterSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  gender: Joi.string().required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{7,30}$")).required(),
});
