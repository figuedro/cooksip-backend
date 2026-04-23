import { prisma } from "../config/db";
import { Ingredient, Step } from "../types/recipeTypes";

type RecipeData = {
  title: string;
  authorId: string;
  steps: Step[];
  ingredients: Ingredient[];
  tags: string[];
  slug: string;
  imageUrl: string | null;
};

export const createRecipe = async (data: RecipeData) => {
  const recipe = await prisma.recipe.create({
    data: {
      title: data.title,
      authorId: data.authorId,
      slug: data.slug,
      imageUrl: data.imageUrl,
      tags: data.tags as any,
      ingredients: {
        create: data.ingredients.map((i) => ({
          name: i.name,
          quantity: Number(i.quantity),
          unit: i.unit as any,
        })),
      },
      steps: {
        create: data.steps.map((s) => ({
          stepOrder: s.stepOrder,
          content: s.content,
        })),
      },
    },
    include: { ingredients: true, steps: true },
  });
  return recipe;
};
