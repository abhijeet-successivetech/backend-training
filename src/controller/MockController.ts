import { Request, Response } from "express";
import { mockData } from "../utils/mockData";

export const mockController = (req: Request , res: Response) => {
    const { count } = req.query;
    const data = mockData(count? Number(count) :2);

    res.json(data);

}