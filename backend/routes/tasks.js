import express from "express";
import {
  getTask,
  createTask,
  toggleTask,
  updateTask,
  deleteTask,
} from "../controller/taskController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.use(requireAuth);

router.get("/", getTask);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.patch("/:id", toggleTask);
router.put("/:id", updateTask);

export default router;
