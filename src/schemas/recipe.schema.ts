import { z } from "zod";

export const createRecipeSchema = z.object({
  title: z.string(),
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
  tags: z.array(z.string()),
});
