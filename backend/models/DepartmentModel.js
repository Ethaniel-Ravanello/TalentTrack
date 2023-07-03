import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Departments = db.define(
  "departments",
  {
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Employees",
        key: "id",
      },
    },
    department_name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "departments",
  }
);

db.sync()
  .then(() => {
    console.log("Department Table Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default Departments;
