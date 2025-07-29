import { UserSchema, RegisterSchema } from "../utils/UserSchema";
export const validationConfig: Record<string, any> = {
  "/register": RegisterSchema,
  "/login": UserSchema,
};
