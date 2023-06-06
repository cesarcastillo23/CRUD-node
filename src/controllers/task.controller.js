const Task = require("../models/Task");
const renderTasks= async (req, res) => {
  const tasks = await Task.find().lean(); //para devolver datos especificos
  console.log(tasks);
  res.render("index", { task: tasks });
}

const createTasks= async (req, res) => {
  try {
    const task = Task(req.body);
    const taskSaved = await task.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const renderTaskEdit=async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (err) {
    console.log(err.messeje);
  }
}
const editTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
}
const deleteTask= async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
}
const taskToggeleDone= async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
}

module.exports = {
  renderTasks,
  createTasks,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggeleDone
};
