import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeFull, RecipeShorted } from 'src/app/model/interfaces/recipe.interface';
import { RecipesService } from 'src/app/services/http/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  drawerActive:boolean = false;
  recipes!: Observable<RecipeShorted[]>;
  selectedRecipe: null | RecipeShorted = null;
  fullRecipe!: Observable<RecipeFull>;

  constructor(private _recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this._recipesService.getRecipes();
  }

  selectRecipe(recipe: RecipeShorted){
    this.fullRecipe = this._recipesService.getFullRecipe(recipe.id);
    this.selectedRecipe = recipe;
  }

  clearSelectedRecipe(){
    this.selectedRecipe = null;
  }


}
