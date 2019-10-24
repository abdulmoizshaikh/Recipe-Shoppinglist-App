import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipeItem: Recipe;
  // selectedItem(recipe) {
  //   console.log('recipe', recipe);
  //   this.recipe = recipe;
  // }
  constructor() { }

  ngOnInit() {
  }

}
