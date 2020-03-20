import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  newRecipe: any;
  newIngredient: any;
  newStep: any;
  
  stepnum: number = 1;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.newRecipe = {
      name: "",
      description: "",
      ingredients: [this.newIngredient],
      steps: [this.newStep]
    }
    this.newIngredient = {
      name: "",
      amount: null,
      measurement: ""
    }
    this.newStep = {
      stepNo: this.stepnum,
      inst: ""
    }
  }

  createRecipeFromService(newRecipe){
    let observable = this.recipeService.createRecipe(newRecipe)
    observable.subscribe(recipe => {
      this.newRecipe = recipe
    })
    // reset newRecipe fields
    this.newRecipe = {
      name: "",
      description: "",
      ingredients: [],
      steps: []
    }
  }

  createIngredient(newIngredient){
    console.log("creating ingredient")
    this.newIngredient = newIngredient
    console.log(this.newIngredient)
    console.log(this.newRecipe.ingredients.push(newIngredient))
    
  }

  createStep(newStep){
    this.newStep = {
      stepNo: this.stepnum,
      inst: newStep.inst
    }
    console.log(this.stepnum);
    this.stepnum++;
  }

}