import express from "express";
import { signup, login, logout, getMe } from "../controller/authController.js";

const router = express.Router();

router.post("/sigup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", getMe);

export default router;
