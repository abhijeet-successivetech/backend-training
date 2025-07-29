import { Request, Response, NextFunction } from 'express';

export function validateNumericParam(paramName: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const value = req.params[paramName];
    if (!value || isNaN(Number(value))) {
      return res.status(400).json({
        error: `Route parameter "${paramName}" must be a numeric value.`,
      });
    }
    next();
  };
}
