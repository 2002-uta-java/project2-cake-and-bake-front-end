import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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

  // onSubmit(){
  //   this.newRecipe = {
  //     name: "",
  //     description: "",
  //     ingredients: [],
  //     steps: []
  //   }
  //   this.newIngredient = {
  //     name: "",
  //     amount: 0,
  //     measurement: ""
  //   }
  //   this.newStep = {
  //     stepNo: this.stepnum,
  //     inst: ""
  //   }
  // }

  createRecipe(recipe){
    

    // reset newRecipe fields
    this.newRecipe = {
      name: "",
      description: "",
      ingredients: [],
      steps: []
    }
  }

  createIngredient(){
    this.newIngredient = {
      name: "",
      amount: 0,
      measurement: ""
    }
  }

  createStep(){
    this.newStep = {
      stepNo: this.stepnum,
      inst: ""
    }
    this.stepnum++;
    console.log(this.stepnum);
  }

}
