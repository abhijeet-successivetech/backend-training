import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import { signup , login } from "../controller/Auth.js";

import auth, {isAdmin, isUser} from "../middleware/auth.js";


router.post("/loginuser", login);
router.post("/signup", signup);

router.get("/admin",auth, isAdmin, (req: Request , res: Response) => {
    res.json({
        success:true,
        message:"Welcome to protected route of admin"
    })
})

router.get("/isuser",auth,isUser, (req: Request, res: Response) => {
    res.json({
        success:true,
        message:"Welcome to protected route of user"
    })
})

export default router;