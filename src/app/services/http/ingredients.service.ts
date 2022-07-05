import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IngredientShort } from 'src/app/model/interfaces/ingredient.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService{

  constructor(private _httpClient: HttpClient) { }

  getIngredients(): Observable<IngredientShort[]> {
    return this._httpClient.get<IngredientShort[]>('http://localhost:5000/ingredients')
  }
}
