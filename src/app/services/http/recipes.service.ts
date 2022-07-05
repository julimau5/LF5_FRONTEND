import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeFull, RecipeShorted } from 'src/app/model/interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _httpClient: HttpClient) {}

  getRecipes(): Observable<RecipeShorted[]> {
    return this._httpClient.get<RecipeShorted[]>('http://localhost:5000/recipes?type=all')
  }

  getFullRecipe(id: number): Observable<RecipeFull>{
    return this._httpClient.get<RecipeFull>(`http://localhost:5000/fullRecipeById?id=${id}`)
  }
}
