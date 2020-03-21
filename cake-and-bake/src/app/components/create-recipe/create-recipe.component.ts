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
  
  stepnum: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.stepnum = 1;
    this.newRecipe = {
      name: "",
      description: "",
      ingredients: [],
      steps: []
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

  createRecipeFromService(){
    console.log(this.newRecipe)
    let observable = this.recipeService.createRecipe(this.newRecipe)
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
    this.newIngredient = newIngredient
    let ingredientList = document.getElementById("ingredientsTable")
    let newRow = document.createElement("tr")
    newRow.innerHTML = `<td matt-cell>${newIngredient.amount}</td><td matt-cell> ${newIngredient.measurement}</td><td matt-cell> ${newIngredient.name}</td>`
    ingredientList.appendChild(newRow)
    this.newRecipe.ingredients.push(newIngredient)
  }

  createStep(newStep){
    this.newStep = {
      stepNo: this.stepnum,
      inst: newStep.inst
    }
    let stepList = document.getElementById("stepsTable")
    let newRow = document.createElement("tr")
    newRow.innerHTML = `<td matt-cell>${this.stepnum}</td><td matt-cell> ${newStep.inst}</td>`
    stepList.appendChild(newRow)
    this.newRecipe.steps.push(newStep)
    console.log(this.stepnum);
    this.stepnum++;
  }

}