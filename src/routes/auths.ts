import { Router } from "express";
import { dynamicValidate } from "../middleware/dynamicValidate.js";
import { registerUser, loginUser } from "../controller/UserController.js";
import { validateUser } from "../middleware/joiValidate.js";
import { validateGeoLocation } from "../middleware/validateGeolocation.js";


const router = Router();

router.post("/registerjoi",validateUser,registerUser);
router.post("/register",validateGeoLocation("IN"),dynamicValidate,registerUser);
router.post("/login",validateGeoLocation("IN"),dynamicValidate,loginUser);

export default router;
