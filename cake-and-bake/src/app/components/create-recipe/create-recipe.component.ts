import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Router } from '@angular/router';

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

  constructor(private recipeService: RecipeService, private _router: Router) { }

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
      amount: ""
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
    this._router.navigate(['/recipes'])

  }

  createIngredient(newIngredient){
    this.newIngredient = newIngredient
    let ingredientList = document.getElementById("ingredientsList")
    let newRow = document.createElement("li")
    newRow.innerHTML = `<li>${newIngredient.amount} ${newIngredient.name}</li>`
    newRow.style.listStyleType = "none";
    newRow.style.boxShadow = "3px 3px 5px grey";
    newRow.style.marginBottom = "5px";
    ingredientList.appendChild(newRow)
    this.newRecipe.ingredients.push(newIngredient)

    // clear all input fields after each addition
    this.newIngredient = {
      name: "",
      amount: ""
    }
  }

  createStep(newStep){
    this.newStep = {
      stepNo: this.stepnum,
      inst: newStep.inst
    }
    let stepList = document.getElementById("stepsList")
    let newRow = document.createElement("li")
    newRow.innerHTML = `<li>Step ${this.stepnum} - ${newStep.inst}</li>`
    newRow.style.listStyleType = "none";
    newRow.style.boxShadow = "3px 3px 5px grey";
    newRow.style.marginBottom = "5px";
    stepList.appendChild(newRow)
    this.newRecipe.steps.push(newStep)
    console.log(this.stepnum);
    this.stepnum++;

    // clear all input fields after each addition
    this.newStep = {
      stepNo: this.stepnum,
      inst: ""
    }
  }


}