import express from "express";
import { createRecipe, deleteRecipe, getRecipes, getRecipesById, updateRecipe } from "../controllers/recipeController";
import { authMiddleware } from "../middlewares/authMiddleware";
import multer from "multer";

const upload = multer();

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipesById);
router.post("/", authMiddleware, createRecipe);
router.put("/:id", authMiddleware, updateRecipe);
router.delete("/:id", authMiddleware, deleteRecipe);

export default router;