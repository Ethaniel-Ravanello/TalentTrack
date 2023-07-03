import { Sequelize } from "sequelize";

const db = new Sequelize("employeelist", "root", "112233", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

db.authenticate()
  .then(() => {
    console.log("Connected to MySQL");
  })
  .catch((err) => {
    console.log(err);
  });

export default db;
