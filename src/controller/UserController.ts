import { Request, Response } from "express";
import { generateTokens } from "../utils/generateTokens";

interface User {
    username: string;
    gender: string;
    age: number;
    email: string;
    password: string;
}

const userList : User[] = [];

export const registerUser = (req: Request , res: Response) => {
    const {email,password,gender,username,age} = req.body;

    const exist = userList.find(user => user.email === email);

    if(exist){
        return res.status(409).json({
            message: "User already exists"
        })
    }
    if(!exist){
    userList.push({username,gender,age,email,password});
    res.status(201).json({
        message: "User registered successfuly"
    })

    }

};

export const loginUser = (req: Request , res: Response) => {
    const {email,password} = req.body;
    
    const checkEmail = userList.find(user => user.email === email);

    if(!checkEmail){
        return res.status(401).json({
            message: "Enter correct email and password"
        })
    };
    generateTokens(email)
    res.status(200).json({
        messsage: `logged in and your token is in log`,
    })
};
