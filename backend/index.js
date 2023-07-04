import express from "express";
// import db from "./config/Database.js";
// import Employee from "./models/EmployeeModel.js";
// import Department from "./models/DepartmentModel.js";
// import Salary from "./models/SalaryModel.js";
// import Pto from "./models/PtoModel.js";
// import Project from "./models/ProjectModel.js";
// import EmployeeProject from "./models/EmployeeProjectMode.js";

import EmployeeRouter from "./routers/EmployeeRouter.js";

const app = express();

app.use(express.json());
app.use(EmployeeRouter);

app.listen(5000, () => {
  console.log("Server Up And Running");
});
