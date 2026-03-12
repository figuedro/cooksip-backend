import {prisma} from "../config/db";

export const recipeService = {
  async getAll() {
    return prisma.recipe.findMany();
  }
};