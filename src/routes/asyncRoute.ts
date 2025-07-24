import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/async-route", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await tempMethod();

    res.json({ message: "This will not be reached if an error is thrown." });
  } catch (error) {

    next(error);
  }
});

async function tempMethod() {
 
  throw new Error("Intentional error during an async operation.");
}

export default router;
