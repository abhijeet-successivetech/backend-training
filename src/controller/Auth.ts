import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();


export const signup = async (req: Request, res:Response)=>{
   
    const {name, password , email, role } = req.body;
    try{
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).send({
                success: false,
                message:"User already exist",
            });
        }
        let hashedpassword;
        try{
            hashedpassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success: false,
                message: "Error in hashing Passwords",
            });
        }
        
        const user = await User.create({
            name, email, password:hashedpassword, role
        });

        return res.status(200).json({
            success:true,
            message:'User Created Successfully'
        });

    }catch(err){
        console.error(err);
        return res.status(500).send({
            success: false,
            message:"User cannot be registered, please try again later",
        });
        
    }
}


export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Give both email as well as passwords"
      });
    }

    let existuser = await User.findOne({ email });

    if (!existuser) {
      return res.status(401).json({
        success: false,
        message: "User is not registered, please sign up"
      });
    }

    const payload = {
      email: existuser.email,
      id: existuser._id,
      role: existuser.role,
    };

    const isPasswordCorrect = await bcrypt.compare(password, existuser.password);
    if (isPasswordCorrect) {
      const token = jwt.sign(payload, process.env.SECRET_KEY as string, {
        expiresIn: "2h",
      });

      const userObj = existuser.toObject();
      (userObj as any).token = token;
      (userObj as any).password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user: userObj,
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
};
