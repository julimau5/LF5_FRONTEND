import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientShort } from 'src/app/model/interfaces/ingredient.interface';
import { IngredientsService} from 'src/app/services/http/ingredients.service';

@Component({
  selector: 'app-ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.scss']
})
export class IngredientsTableComponent implements OnInit {
  ingredients!: IngredientShort[]
  displayedColumns: string[] = ['id', 'Bezeichnung', 'Preis'];

  constructor(private _ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this._ingredientsService.getIngredients()
      .subscribe((data) => this.ingredients = data )
  }

}
