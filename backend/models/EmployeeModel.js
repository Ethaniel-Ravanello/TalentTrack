import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Employees = db.define(
  "employees",
  {
    first_name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    last_name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    profile_picture: {
      type: DataTypes.STRING,
    },
    department_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Departments",
        key: "id",
      },
    },
    salary_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "salaries",
        key: "id",
      },
    },
    pto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "ptos",
        key: "id",
      },
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    roles: {
      type: DataTypes.STRING,
    },
    joined_date: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "employees",
    timestamps: false,
  }
);

db.sync()
  .then(() => {
    console.log("Employee Table Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default Employees;
