import { Router } from "express";
import { DynamicValidator } from "../middleware/dynamicValidate.js";
import AuthController from "../controller/userController.js";
import { UserValidator } from "../middleware/joiValidate.js";

const router = Router();
const authController = new AuthController();
const dynamicValidate  = new DynamicValidator
const validateUser  = new UserValidator;

router.post("/registerjoi",validateUser.validate, authController.registerUser);

router.post("/register",dynamicValidate.validate, authController.registerUser);
router.post("/login",dynamicValidate.validate,authController.loginUser);

export default router;
