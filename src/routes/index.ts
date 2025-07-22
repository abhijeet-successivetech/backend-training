import { Router, Request, Response } from "express";
import authenticateJWT from "../middleware/auth";
import { mockController } from "../controller/mockController";
import { customHeaderMiddleware } from "../middleware/customHeader";
import { rateLimiterMiddleware } from "../middleware/rateLimiter";
import { validateNumericParam } from "../middleware/numericParam";
import { validateGeoLocation } from "../middleware/validateGeolocation";
import { registerUser, loginUser } from "../controller/userController";


const router = Router();

router.get("/",rateLimiterMiddleware(5,2),mockController);

router.get("/protected", authenticateJWT, (req: Request, res: Response) => {
  res.send("You have a valid access token");
});

router.post("/register",registerUser,authenticateJWT, (req: Request, res: Response) => {
  
})

router.get("/custom",authenticateJWT,customHeaderMiddleware("Custom","Header"), (req: Request, res: Response) => {
  res.send("hello");
});

router.get("/mocklist",authenticateJWT,(req: Request, res: Response) => {
    res.sendFile("/home/abhijeet.kumar/Documents/training/backend-training/src/utils/mockList.ts");
})

router.get("/logger", authenticateJWT, (req: Request, res: Response) => {
  res.send("Logger route accessed");
});

router.get('/items',validateNumericParam('id'),(req: Request, res: Response) => {
    res.json({ message: 'Query parameters are valid!' });
  }
);

router.get('/secure-data',authenticateJWT,validateGeoLocation('IN'), (req: Request, res: Response) => {
    res.json({ message: 'Hello from India!' });
  }
);



router.get("/mockData", authenticateJWT, mockController);

router.post("/mockData",rateLimiterMiddleware(3,6), authenticateJWT, mockController);

export default router;
