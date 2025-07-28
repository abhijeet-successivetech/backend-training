import express from "express";
const router = express.Router();

import { signup , login } from "../controller/Auth.js";
import auth from "../middleware/auth.js";



router.post("/login", login);
router.post("/signup", signup);

export default router;