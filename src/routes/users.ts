import express from "express";
const router = express.Router();
import AuthController from "../controller/Auth.js";

const userAuth = new AuthController();


router.post("/login-user", userAuth.login);
router.post("/signup", userAuth.signup);

export default router;