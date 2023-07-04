import express from "express";

import EmployeeRouter from "./routers/EmployeeRouter.js";
import DepartmentRouter from "./routers/DepartmentRouter.js";
import PtoRouter from "./routers/PtoRouter.js";

const app = express();

app.use(express.json());

app.use(EmployeeRouter);
app.use(DepartmentRouter);
app.use(PtoRouter);

app.listen(5000, () => {
  console.log("Server Up And Running");
});
