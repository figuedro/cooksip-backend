import { z } from "zod";

export const createRecipeSchema = z.object({
  title: z.string().min(3, { message: "O título deve conter pelo menos 3 caracteres" }),
  author: z.string(),
  steps: z.array(
    z.object({
      stepOrder: z.number(),
      content: z.string(),
    }),
  ),
  ingredients: z.array(
    z.object({
      name: z.string(),
      unit: z.string(),
      quantity: z.number(),
    }),
  ),
  tags: z.array(z.enum([ "BREAKFAST",
  "LUNCH",
  "DINNER",
  "SNACK",
  "DESSERT",
  "DRINK",
  "APPETIZER",
  "SANDWICH"])),
});
