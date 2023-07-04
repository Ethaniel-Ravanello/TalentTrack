import express from "express";

import {
  getEmployees,
  getEmployeesById,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from "../controllers/EmployeeController.js";

const router = express.Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeesById);

router.post("/employees", createEmployees);
router.put("/employees/:id", updateEmployees);
router.delete("/employees/:id", deleteEmployees);

export default router;
