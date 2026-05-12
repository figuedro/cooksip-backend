import { Request, Response } from "express";
import * as recipeService from "../services/recipeService";
import { generateSlug } from "../utils/generateSlug";
import { uploadToS3 } from "../utils/uploadToS3";

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

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await recipeService.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar receitas" });
  }
};

export const getUnpublishedRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await recipeService.getUnpublishedRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar receitas não publicadas" });
  }
};

export const getRecipesById = async (req: Request, res: Response) => {
  // Implement get recipe by ID logic here
}


export const updateRecipe = async (req: Request, res: Response) => {
};

export const approveRecipe = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const recipe = await recipeService.approveRecipe(id);

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Erro ao aprovar receita" });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    await recipeService.deleteRecipe(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar receita" });
  }
};