import express from "express";

import {
  getDepartment,
  getDepartmentById,
  assignDepartment,
} from "../controllers/DepartmentController.js";

const router = express.Router();

router.get("/departments", getDepartment);
router.get("/departments/:id", getDepartmentById);

router.put("/departments", assignDepartment);

export default router;
