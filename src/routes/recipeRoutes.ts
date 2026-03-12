import express from "express";
import { createRecipe, deleteRecipe, getRecipes, updateRecipe } from "../controllers/recipeController";

const router = express.Router();

router.get("/", getRecipes);
// router.get("/", getRecipes);
router.post("/", createRecipe);
router.put("/", updateRecipe);
router.delete("/", deleteRecipe);

export default router;