import { Router, Request, Response } from "express";
import { mockController } from "../controller/mockController.js";
import authenticateJWT from "../middleware/auth.js";
import { rateLimiterMiddleware } from "../middleware/rateLimiter.js";

const router = Router();

router.get("/mockData", authenticateJWT, mockController);
router.post("/mockData", rateLimiterMiddleware(3, 6), authenticateJWT, mockController);

router.get("/mocklist", authenticateJWT, (_: Request, res: Response) => {
  res.sendFile("/home/abhijeet.kumar/Documents/training/backend-training/src/utils/mockList.ts");
});

export default router;
