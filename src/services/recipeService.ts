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


export const getRecipes = async () => {
  const recipes = await prisma.recipe.findMany({
    where: { approved: true },
    include: { ingredients: true, steps: true },
  });
  return recipes;
};

export const getUnpublishedRecipes = async () => {
  const recipes = await prisma.recipe.findMany({
    where: { approved: false },
    include: { ingredients: true, steps: true },
  });
  return recipes;
};

export const approveRecipe = async (id: string) => {
  const recipe = await prisma.recipe.update({
    where: { id },
    data: { approved: true },
  });
  return recipe;
};

// export const updateRecipe = async (id: string, data: RecipeData) => {
//   const recipe = await prisma.recipe.update({
//     where: { id },
//     data: {
//       ...data,
//       ingredients: {
//         deleteMany: {},
//         create: data.ingredients?.map((i) => ({
//           name: i.name,
//           quantity: Number(i.quantity),
//           unit: i.unit as any,
//         })),
//       },
//       steps: {
//         deleteMany: {},
//         create: data.steps?.map((s) => ({
//           stepOrder: s.stepOrder,
//           content: s.content,
//         })),
//       },
//     },
//     include: { ingredients: true, steps: true },
//   });
//   return recipe;
// };

export const deleteRecipe = async (id: string) => {
  await prisma.recipe.delete({
    where: { id },
  });
};

