import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Departments = db.define(
  "departments",
  {
    department_name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "departments",
    timestamps: false,
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
