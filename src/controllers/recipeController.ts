import { Request, Response } from "express";
import * as recipeService from "../services/recipeService";
import { generateSlug } from "../utils/generateSlug";
import { uploadToS3 } from "../utils/uploadToS3";

export const getRecipes = async (req: Request, res: Response) => {
  // Implement get all recipes logic here
};

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const { title, steps, ingredients, tags } = req.body;
    const authorId = req.user.userId;

    const imageUrl = req.file ? await uploadToS3(req.file) : null;
    const slug = generateSlug(title);

    const recipe = await recipeService.createRecipe({
      title,
      authorId,
      steps: JSON.parse(steps),
      ingredients: JSON.parse(ingredients),
      tags: JSON.parse(tags),
      slug,
      imageUrl,
    });

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar receita" });
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  // Implement update recipe logic here
};

export const deleteRecipe = async (req: Request, res: Response) => {
  // Implement delete recipe logic here
};


export const getRecipesById = async (req: Request, res: Response) => {
  // Implement get recipe by ID logic here
}