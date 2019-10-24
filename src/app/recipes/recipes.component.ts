import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeWasSelected: Recipe;

  constructor() { }

  ngOnInit() {
  }

  gettingRecipeWasSelected(recipe: Recipe) {
    console.log('recipe', recipe);
    this.recipeWasSelected = recipe;
  }

}
