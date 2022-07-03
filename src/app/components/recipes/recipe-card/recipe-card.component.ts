import { Component, OnInit } from '@angular/core';
import { RecipeShorted } from 'src/app/model/interfaces/recipe.interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  recipe: RecipeShorted = {
    id: 1,
    name: 'Rezept name',
    categories: ['vegan', 'low fat'],
    restrictions: ['peanuts', 'tomate'],
    imageUrl: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
