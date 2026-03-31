import { prisma } from "../config/db";

type RecipeData = {
  title: string;
  author: string;
  steps: { stepOrder: number; content: string }[];
  ingredients: { name: string; unit: string; quantity: number }[];
  tags: string[];
};

export const createRecipe = async (data: RecipeData) => {
  // const recipe = await prisma.recipe.create({
  //   data: {
  //     title: data.title,
  //     author: data.author,
  //     steps: data.steps,
  //     ingredients: data.ingredients,
  //     tags: data.tags
  //   }
  // });
  // return recipe;
};
