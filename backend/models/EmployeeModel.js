import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const Employee = db.define("employees", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_picture: {
    type: DataTypes.STRING,
  },
  department_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Department",
      key: "id",
    },
  },
  salary_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "salary",
      key: "id",
    },
  },
  pto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "pto",
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
});

db.sync()
  .then(() => {
    console.log("Employee Table Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default Employee;
