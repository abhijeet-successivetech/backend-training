import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default class AuthController {
  async signup(req: Request, res: Response, next?: NextFunction): Promise<Response | void> {
    const { name, password, email, role } = req.body;
    try {
      const existUser = await User.findOne({ email });
      if (existUser) {
        return res.status(400).json({
          success: false,
          message: "User already exist",
        });
      }

      let hashedpassword: string;
      try {
        hashedpassword = await bcrypt.hash(password, 10);
      } catch (err) {
        return res.status(500).json({
          success: false,
          message: "Error in hashing Passwords",
        });
      }

      await User.create({ name, email, password: hashedpassword, role });

      return res.status(200).json({
        success: true,
        message: "User Created Successfully",
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "User cannot be registered, please try again later",
      });
    }
  }

  async login(req: Request, res: Response, next?: NextFunction): Promise<Response | void> {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(401).json({
          success: false,
          message: "Give both email as well as passwords",
        });
      }

      const existUser = await User.findOne({ email });
      if (!existUser) {
        return res.status(401).json({
          success: false,
          message: "User is not registered, please sign up",
        });
      }

      const payload = {
        email: existUser.email,
        id: existUser._id,
        role: existUser.role,
      };

      const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
      if (isPasswordCorrect) {
        const token = jwt.sign(payload, process.env.SECRET_KEY as string, { expiresIn: "2h" });

        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };

        const loggedUser = await User.findById(existUser._id).select("-password");

        return res.cookie("token", token, options).status(200).json({
          success: true,
          token,
          user: loggedUser,
          message: "User logged in successfully",
        });
      } else {
        return res.status(403).json({
          success: false,
          message: "Password Incorrect",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Login failure",
      });
    }
  }
}
