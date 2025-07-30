import { Router, Request, Response } from "express";
import { triggerFrequentError } from "../middleware/frequentHandler";

const router = Router();

router.get(
  "/error/:errorName",
  triggerFrequentError("errorName"),
  (req: Request, res: Response) => {
    res.json({ message: "No error triggered." });
  }
);

export default router;
