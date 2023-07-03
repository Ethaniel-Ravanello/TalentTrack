import express from "express";
import db from "./config/Database.js";
import Employee from "./models/EmployeeModel.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server Up And Running");
});
