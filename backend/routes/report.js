import express from "express";
import { getStats, downloadCSV } from "../controller/reportController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.use(requireAuth)

router.get("/", getStats);
router.get("/csv", downloadCSV);

export default router;
