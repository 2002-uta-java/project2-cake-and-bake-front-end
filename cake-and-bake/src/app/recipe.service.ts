import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private recipeById = "/recipe/"
  private allRecipes = "/recipes/"

  constructor(
    private http: HttpClient,
    private util: UtilService) { }

  getRecipeById(id){
    return this.http.get(this.util.baseUrl + this.allRecipes + 'full/' + id)
  }

  createRecipe(newRecipe){
    console.log("service: " + newRecipe)
    return this.http.post(this.util.baseUrl + this.allRecipes, newRecipe);
  }

  getAllRecipes(){
    return this.http.get(this.util.baseUrl + this.allRecipes)
  }

}
