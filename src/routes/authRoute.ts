import { Router } from "express";
import { dynamicValidate } from "../middleware/dynamicValidate.js";
import { registerUser, loginUser } from "../controller/userController.js";
import { validateUser } from "../middleware/joiValidate.js";
import authenticateJWT from "../middleware/auth.js";

const router = Router();

router.post("/registerjoi",validateUser, registerUser);

router.post("/register",dynamicValidate, registerUser);
router.post("/login",dynamicValidate,authenticateJWT,loginUser);

export default router;
