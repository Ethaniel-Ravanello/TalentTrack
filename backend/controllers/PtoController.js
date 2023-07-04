import Ptos from "../models/PtoModel.js";
import Employees from "../models/EmployeeModel.js";

export const getPtos = async (req, res) => {
  try {
    const response = await Ptos.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createPTO = async (req, res) => {
  try {
    const pto = await Ptos.create(req.body);

    // Update the employee's salary ID
    const employees = await Employees.findByPk(req.body.employee_id);
    if (employees) {
      employees.pto_id = pto.id;
      await employees.save();
    }

    res.status(201).json(pto);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create PTO" });
  }
};
