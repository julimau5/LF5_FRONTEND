import { Component, Input, OnInit } from '@angular/core';
import { RecipeShorted } from 'src/app/model/interfaces/recipe.interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input('recipe') recipe!: RecipeShorted;

  constructor() { }

  ngOnInit(): void {
  }

}
