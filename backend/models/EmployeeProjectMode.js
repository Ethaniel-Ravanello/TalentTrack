import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const EmployeeProjects = db.define(
  "employee_projects",
  {
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Projects",
        key: "id",
      },
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Employees",
        key: "id",
      },
    },
  },
  {
    tableName: "employee_projects",
  }
);

db.sync()
  .then(() => {
    console.log("EmployeeProject Pivot Table Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default EmployeeProjects;
