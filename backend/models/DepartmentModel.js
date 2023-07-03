import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Department = db.define("department", {
  employee_id: {
    type: DataTypes.STRING,
    references: {
      model: "Employee",
      key: "id",
    },
  },
  department_name: {
    type: DataTypes.STRING,
  },
});

db.sync()
  .then(() => {
    console.log("Department Table Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default Department;
