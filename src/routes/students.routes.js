import {Router} from "express";

import {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
} from "../controllers/Students.controllers.js";

const StudentsRoutes = Router();

StudentsRouter.get("/", getStudents);
StudentsRouter.get("/:id", getStudent);
StudentsRouter.post("/", createStudent);
StudentsRouter.put("/:id", updateStudent);
StudentsRouter.delete("/:id", deleteStudent);



export default StudentsRoutes;




