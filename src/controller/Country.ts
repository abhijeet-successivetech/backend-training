import { Request, Response } from "express";
import { countries } from "../utils/countries";
import CountryModel from "../models/Country";

export default class CountryController {
  static async seedCountry(req: Request, res: Response): Promise<Response> {
    try {
      await CountryModel.deleteMany({});
      
      await CountryModel.insertMany(countries);
      
      return res.status(201).json({
        message: "Database is seeded"
      });
    } catch (error) {
      return res.status(500).json({ 
        message: "Error seeding the database.",
      });
    }
  }
}
