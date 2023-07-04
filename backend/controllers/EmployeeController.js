import Employees from "../models/EmployeeModel.js";

export const getEmployees = async (req, res) => {
  try {
    const response = await Employees.findAll();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
};

export const getEmployeesById = async (req, res) => {
  try {
    const response = await Employees.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(response);
  } catch (error) {
    console.log(err);
  }
};

export const createEmployees = async (req, res) => {
  try {
    await Employees.create(req.body);
    res.status(201).json({ msg: "Employee Created" });
  } catch (err) {
    console.log(err);
  }
};

export const getEmployeesByDepartmentId = async (req, res) => {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
