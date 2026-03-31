import { Request, Response } from "express";
import * as recipeService from "../services/recipeService";
import { generateSlug } from "../utils/generateSlug";
import { CreateRecipeDTO } from "../types/recipeTypes";

export const getRecipes = async (req: Request, res: Response) => {
  // Implement get all recipes logic here
};

export const createRecipe = async (req: Request, res: Response) => {

  const { title, steps, ingredients, tags } = req.body as CreateRecipeDTO;

  const author = req.user?.userId

  // const imageUrl = 

  const slug = generateSlug(title);

  // const recipe = await recipeService.createRecipe({ title, author, steps, ingredients, tags });
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