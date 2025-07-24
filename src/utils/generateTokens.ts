import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

interface UserLoad {
  usermail: string;
}

class Token {
  private secretkey: string;
  constructor() {
    this.secretkey = process.env.JWT_SECRET || "defaultsecret";
  }

  public generateTokens = (mail: string) => {
  const user: UserLoad = {usermail: mail };

  const token = jwt.sign(user, this.secretkey, { expiresIn: "1h" });
  console.log("Generated JWT Token:", token);
  return token;
};

}

export default Token;
