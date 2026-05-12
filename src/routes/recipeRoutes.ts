import express from "express";
import { approveRecipe, createRecipe, deleteRecipe, getRecipes, getRecipesById, getUnpublishedRecipes, updateRecipe } from "../controllers/recipeController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { validate } from "../middlewares/validate";
import multer from "multer";
import { requireRole } from "../middlewares/roleMiddleware";
import { createRecipeSchema } from "../schemas/recipe.schema";

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post("/", authMiddleware, upload.single("image"), validate(createRecipeSchema), createRecipe);
router.get("/", getRecipes);
router.get("/unpublished", getUnpublishedRecipes);
router.get("/:id", getRecipesById);
router.put("/:id", authMiddleware, updateRecipe);
router.put("/approve/:id", authMiddleware, requireRole("ADMIN"), approveRecipe);
router.delete("/:id", authMiddleware, deleteRecipe);

export default router;