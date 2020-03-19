import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  newRecipe: any;

  constructor() { }

  ngOnInit() {
    this.newRecipe = {
      name: "",
      description: "",
      ingredients: [],
      steps: []
    }
  }

  createRecipe(recipe){
    

    // reset newRecipe fields
    this.newRecipe = {
      name: "",
      description: "",
      ingredients: [],
      steps: []
    }
  }

}
