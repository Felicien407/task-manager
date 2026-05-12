import Task from "../model/Task.js";

export const getTask = async (req, res) => {
  const task = await Task.find();
  res.status(200).json(tasks);
};

export const createTask = async (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title is required" });
  }
  const newTask = await new Task({
    title: title.trim(),
    userId: req.session.userId,
  }).save();

  res.status(201).send(newTask);
};

export const toggleTask = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    userId: req.session.userId,
  });
  if (!task) {
    return res.status(404).json({ message: "Task Not Found!" });
  }
  task.completed = !task.completed;
  await task.save();
  res.status(200).json(task);
};

export const updateTask = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const task = await Task.findOne({
    _id: req.params.id,
    userId: req.session.userId,
  });
  if (!task) {
    return req.status(404).json({ message: "Task not found" });
  }
  task.title = title;
  await task.save();
  res.status(200).json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    userId: req.session.userId,
  });
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json({ message: "Task deleted" });
};
