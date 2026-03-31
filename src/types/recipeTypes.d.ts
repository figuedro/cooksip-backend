export interface Recipe {
  id: string;
  title: string;
  slug: string;
  authorId: string;
  steps: Step[];
  ingredients: Ingredient[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  imageFile: string;
}

export interface Step {
  order: number;
  description: string;
}

export interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

export type CreateRecipeDTO = Omit<Recipe, "id" | "slug" | "createdAt" | "updatedAt">;
