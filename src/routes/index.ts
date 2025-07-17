import { Router, Request, Response } from "express";
import authenticateJWT from "../middleware/auth";
import { mockController } from "../controller/mockController";
import { customHeaderMiddleware } from "../middleware/customHeader";
import { rateLimiterMiddleware } from "../middleware/rateLimiter";

const router = Router();

router.get("/",rateLimiterMiddleware(5,2),mockController);

router.get("/protected", authenticateJWT, (req: Request, res: Response) => {
  res.send("You have a valid access token");
});


router.get("/custom",authenticateJWT,customHeaderMiddleware("Custom","Header"), (req: Request, res: Response) => {
  res.send("hello");
});

router.get("/mocklist",authenticateJWT,(req: Request, res: Response) => {
    res.sendFile("/home/abhijeet.kumar/Documents/training/backend-training/src/utils/mockList.ts");
})

router.get("/logger", authenticateJWT, (req: Request, res: Response) => {
  res.send("Logger route accessed");
});

router.get("/mockData", authenticateJWT, mockController);

router.post("/mockData",rateLimiterMiddleware(3,6), authenticateJWT, mockController);

export default router;
