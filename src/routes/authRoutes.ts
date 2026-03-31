import express from "express";
import { createUser, loginUser, logoutUser } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/logout", authMiddleware, logoutUser);

export default router;
