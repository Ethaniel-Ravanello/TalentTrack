import express from "express";

import {
  getEmployees,
  createEmployees,
  getEmployeesById,
  getEmployeesByDepartmentId,
} from "../controllers/EmployeeController.js";

const router = express.Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeesById);
router.get("/department/:id", getEmployeesByDepartmentId);
router.post("/employees", createEmployees);

export default router;
