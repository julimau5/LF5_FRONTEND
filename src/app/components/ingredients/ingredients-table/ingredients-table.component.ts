import { Component, OnInit } from '@angular/core';
import { IngredientShort } from 'src/app/model/interfaces/ingredient.interface';

@Component({
  selector: 'app-ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.scss']
})
export class IngredientsTableComponent implements OnInit {
  ingredients: IngredientShort[] = [
    { id: 1, name: 'Ingredient One', price: 1.2},
    { id: 2, name: 'Ingredient Two', price: 1.3},
    { id: 3, name: 'Ingredient Three', price: 1.1},
    { id: 4, name: 'Ingredient Four', price: 0.2},
  ]
  displayedColumns: string[] = ['id', 'Bezeichnung', 'Preis'];

  constructor() { }

  ngOnInit(): void {
  }

}
