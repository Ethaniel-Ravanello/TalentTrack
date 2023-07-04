import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Salaries = db.define(
  "salaries",
  {
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Employees",
        key: "id",
      },
    },
    salaty_type: {
      type: DataTypes.STRING,
    },
    salaty_amount: {
      type: DataTypes.STRING,
    },
    salaty_payday: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

db.sync()
  .then(() => {
    console.log("Salary Table Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default Salaries;
