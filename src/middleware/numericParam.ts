import { Request, Response, NextFunction } from "express";

export class NumericParamValidator {
  public validate(paramName: string) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const value = req.params[paramName];
      if (!value || isNaN(Number(value))) {
        res.status(400).json({
          error: `Route parameter "${paramName}" must be a numeric value.`,
        });
        return;
      }
      next();
    };
  }
}
