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
  imageUrl: string | null;
}

export interface Step {
  stepOrder: number;
  content: string;
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

export type CreateRecipeDTO = Omit<Recipe, "id" | "slug" | "createdAt" | "updatedAt">;
