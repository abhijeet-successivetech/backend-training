import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "defaultsecret";

export const generateTokens = (mail: string) => {
  const user = { usermail: mail };

  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
  console.log("Generated JWT Token:", token);
  return token;
};
