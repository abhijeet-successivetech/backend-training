import { Router, Request, Response } from "express";
import authenticateJWT from "../middleware/auth";
import { validateNumericParam } from "../middleware/numericParam";

const router = Router();

router.get("/protected", authenticateJWT, (req: Request, res: Response) => {
  res.json({ message:"Access token is valid." });
});

router.get("/items",authenticateJWT,validateNumericParam("id"),(req: Request, res: Response) => {
    res.json({ message: "Valid ID received." });
  }
);

export default router;
