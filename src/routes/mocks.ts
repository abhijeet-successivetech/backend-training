import { Router } from "express";
import { mockController } from "../controller/MockController.js";
import authenticateJWT from "../middleware/auth.js";
import CountryController from "../controller/Country.js";


const router = Router();

router.get("/mockData", authenticateJWT, mockController);
router.post("/mockData", authenticateJWT, mockController);

router.post("/seed",CountryController.seedCountry);

export default router;
