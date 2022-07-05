import { IngredientData } from "./ingredient.interface";

export interface RecipeData {
  id: number;
  name: string;
  directions: string;
  imageUrl: string;
  categoriesIds: number[];
  restrictionsIds: number[];
  ingredientsIds: number[];
}

export interface RecipeShorted {
  id: number;
  name: string;
  imageUrl: string;
  categories?: string[];
  restrictions?: string[];
}

export interface RecipeFull {
  id: number;
  name: string;
  directions: string;
  imageUrl: string;
  categories: string[];
  restrictions: string[];
  ingredients: IngredientData[]
}

export interface RecipeDataDTO extends Omit<RecipeData, 'id'>{}
