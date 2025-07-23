import { userSchema, registerSchema } from "../models/userSchema";
export const validationConfig: Record<string, any> = {
  "/register": registerSchema,
  "/login": userSchema,
};
