import { Request, Response } from "express";
import StudentModel, { IStudent } from "../models/Student";

export default class StudentController {
  async createStudent(req: Request, res: Response): Promise<void> {
    try {
      const { name, city, age } = req.body;
      if (!name || !city || typeof age !== "number") {
        res.status(400).json({ status: false,
             message: "Name, city, and age are required." });
        return;
      }

      const student: IStudent = await StudentModel.create({ name, city, age });

      res.status(201).json({
        status: true,
        data: student,
        message: "Student created successfully"
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Error creating student",
      
      });
    }
  }
}
