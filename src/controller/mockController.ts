import { Request, Response } from "express";
import { mockData } from "../utils/mockData";

export class MockController {
  public getMockData = (req: Request, res: Response): void => {
    const { count } = req.query;

    const data = mockData(count ? Number(count) : 2);

    res.json(data);
  };
}
