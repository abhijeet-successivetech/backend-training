import { Request, Response, NextFunction } from 'express';


export function customHeaderMiddleware(headerName: string, headerValue: string) {
  return (req: Request, res: Response, next: NextFunction): void => {
    res.setHeader(headerName, headerValue);
    next();
  };
}
