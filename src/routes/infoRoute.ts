import { Router, Request, Response } from "express";
import { JWTAuthenticator } from "../middleware/auth";
import { ParamValidator } from "../middleware/validateParams";

const router = Router();

const authenticateJWT  = new JWTAuthenticator();
const validateParam   = new ParamValidator();

router.get("/protected", authenticateJWT.authenticate, (req: Request, res: Response) => {
  res.send("Access token is valid.");
});



router.get("/get-info",authenticateJWT.authenticate, validateParam.validate); // I  will use for check-param validation

export default router;
