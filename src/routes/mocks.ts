import { Router } from "express";
import { mockController } from "../controller/MockController.js";
import authenticateJWT from "../middleware/auth.js";

const router = Router();

router.get("/mockData", authenticateJWT, mockController);
router.post("/mockData", authenticateJWT, mockController);

export default router;
