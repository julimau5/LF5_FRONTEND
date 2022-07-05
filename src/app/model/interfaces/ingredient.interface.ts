export interface IngredientData {
  id: number;
  name: string;
  units: string;
  price: string;
  stock: number;
  supplierId: number;
  calories: number;
  carbs: number;
  protein: number;
  amount?: number;
}

export interface IngredientShort {
  id: number;
  name: string;
  price: number;
}

export interface IngredientDTO extends Omit<IngredientData, 'id'>{}
