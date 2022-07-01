import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path:'recipes',
    component: RecipesComponent
  },
  {
    path:'ingredients',
    component: IngredientsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
