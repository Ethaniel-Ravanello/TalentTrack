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

export const updateEmployees = async (req, res) => {
  try {
    await Employees.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Employee Updated" });
  } catch (err) {
    console.log(err);
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    await Employees.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Employee Fired" });
  } catch (err) {
    console.log(err);
  }
};
