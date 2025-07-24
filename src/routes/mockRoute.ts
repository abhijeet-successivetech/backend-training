import { Router, Request, Response } from "express";
import { MockController } from "../controller/mockController.js";
import { JWTAuthenticator } from "../middleware/auth.js";
import { RateLimiterMiddleware } from "../middleware/rateLimiter.js";

const router = Router();

const mockController  = new MockController();
const authenticateJWT  = new JWTAuthenticator();

const limit = new RateLimiterMiddleware();

router.get("/mockData", authenticateJWT.authenticate, mockController.getMockData);
router.post("/mockData",limit.rateLimiter(3,6), authenticateJWT.authenticate, mockController.getMockData);


export default router;
