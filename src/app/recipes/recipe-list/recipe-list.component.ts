import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://images-na.ssl-images-amazon.com/images/I/91CE2CnlnSL._SX466_.jpg')
  ];
  // https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg
  // https://images-na.ssl-images-amazon.com/images/I/91CE2CnlnSL._SX466_.jpg
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipeSelected(recipe: Recipe) {
    console.log('recipe', recipe);
    this.selectedRecipe.emit(recipe);
  }

  constructor() { }
  ngOnInit() {
  }

}
