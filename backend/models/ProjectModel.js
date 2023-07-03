import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Projects = db.define(
  "projects",
  {
    project_name: {
      type: DataTypes.STRING,
    },
    project_image: {
      type: DataTypes.STRING,
    },
    project_description: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "projects",
  }
);

db.sync()
  .then(() => {
    console.log("Project Table Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default Projects;
