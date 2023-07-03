import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Ptos = db.define(
  "ptos",
  {
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Employees",
        key: "id",
      },
    },
    pto_type: {
      type: DataTypes.STRING,
    },
    starts_date: {
      type: DataTypes.DATE,
    },
    end_type: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "ptos",
  }
);

db.sync()
  .then(() => {
    console.log("PTO Table Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default Ptos;
