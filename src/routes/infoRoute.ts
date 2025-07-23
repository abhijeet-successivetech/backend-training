import { Router, Request, Response } from "express";
import authenticateJWT from "../middleware/auth";
import { customHeaderMiddleware } from "../middleware/customHeader";
import { validateNumericParam } from "../middleware/numericParam";
import { validateGeoLocation } from "../middleware/validateGeolocation";
import { validateParam } from "../middleware/validateParams";

const router = Router();

router.get("/protected", authenticateJWT, (req: Request, res: Response) => {
  res.send("Access token is valid.");
});

router.get(
  "/custom",
  authenticateJWT,
  customHeaderMiddleware("X-Custom", "Custom-value"),
  (req: Request, res: Response) => {
    res.send("Custom header route.");
  }
);

router.get("/logger", authenticateJWT, (req: Request, res: Response) => {
  res.send("Logger route accessed.");
});

router.get("/items",
  authenticateJWT,
  validateNumericParam("id"),
  (req: Request, res: Response) => {
    res.json({ message: "Valid ID received." });
  }
);

router.get("/secure-data",
  authenticateJWT,
  validateGeoLocation("IN"),
  (req: Request, res: Response) => {
    res.json({ message: "Welcome from India!" });
  }
);

router.get("/get-info",authenticateJWT, validateParam); // I  will use for check-param validation

export default router;
