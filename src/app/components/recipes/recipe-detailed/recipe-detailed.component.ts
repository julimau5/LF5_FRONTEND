import { Component, Input, OnInit } from '@angular/core';
import { RecipeFull } from 'src/app/model/interfaces/recipe.interface';

@Component({
  selector: 'app-recipe-detailed',
  templateUrl: './recipe-detailed.component.html',
  styleUrls: ['./recipe-detailed.component.scss']
})
export class RecipeDetailedComponent implements OnInit {
  @Input('recipe') recipe!: RecipeFull | null;
  calories: number = 0;
  carbs: number = 0;
  protein: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.setInfos(), 300)
  }

  setInfos(){
    if(this.recipe && this.recipe.ingredients.length > 0) {
      this.recipe.ingredients.forEach((ingredient) => {
        this.calories += ingredient.calories;
        this.carbs += ingredient.carbs;
        this.protein += ingredient.protein;
      })
    }
    console.log(this.calories)
  }
}
