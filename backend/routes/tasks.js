import { error } from "console";
import express from "express";
import {
  getTask,
  createTask,
  toggleTask,
  updateTask,
  deleteTask,
} from "../controller/taskController.js";

const router = express.Router();

router.get("/", getTask);

router.post("/", createTask);

router.delete("/:id", deleteTask);

router.patch("/:id", toggleTask);

router.put("/:id", updateTask)

export default router;
