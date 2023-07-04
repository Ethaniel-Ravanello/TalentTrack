import Departments from "../models/DepartmentModel.js";
import Employees from "../models/EmployeeModel.js";

export const getDepartment = async (req, res) => {
  try {
    const response = await Departments.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getDepartmentById = async (req, res) => {
  try {
    const employees = await Employees.findAll({
      where: {
        department_id: req.params.id,
      },
    });

    if (employees.length > 0) {
      res.status(200).json(employees);
    } else {
      res
        .status(404)
        .json({ error: "No employees found for the department ID" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const assignDepartment = async (req, res) => {
  try {
    const employees = await Employees.findByPk(req.body.employeeId);
    const departments = await Departments.findByPk(req.body.departmentId);
    if (employees && departments) {
      await employees.set("department_id", departments.id);
      await employees.save();
      res
        .status(200)
        .json({ message: "Employee assigned to department successfully" });
    } else {
      res.status(404).json({ message: "Employee or department not found" });
    }
  } catch (error) {
    console.log(error);
  }
};
