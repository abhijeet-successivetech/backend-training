import { Router, Request, Response } from "express";
import { FrequentErrorTrigger } from "../middleware/frequentHandler";

const router = Router();
const triggerFrequentError  = new FrequentErrorTrigger();

router.get(
  "/error/:errorName",
  triggerFrequentError.trigger("errorName"),
  (req: Request, res: Response) => {
    res.json({ message: "No error triggered." });
  }
);

export default router;
