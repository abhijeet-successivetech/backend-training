import {Router} from "express";
import StudentController from "../controller/StudentController";

const router = Router();
const student = new StudentController();

router.post("/create-student",student.createStudent);

export default router;