const express = require("express");
const ruta = express.Router();
const {
  renderTasks,
  createTasks,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggeleDone,
} = require("../controllers/task.controller");

ruta.get("/", renderTasks);
ruta.post("/task/add", createTasks);

ruta.get("/task/:id/toggleDone", taskToggeleDone);

ruta.get("/task/:id/edit", renderTaskEdit);

ruta.post("/task/:id/edit", editTask);

ruta.get("/task/:id/delete", deleteTask);


module.exports = ruta;
