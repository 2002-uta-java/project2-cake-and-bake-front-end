import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private recipeById = "/recipe"
  private allRecipes = "/recipes"

  constructor(
    private http: HttpClient,
    private util: UtilService) { }

  createRecipe(newRecipe){
    console.log("service: " + newRecipe)
    return this.http.post(this.util.baseUrl + this.recipeById, newRecipe);
  }

  getAllRecipes(){
    return this.http.get(this.util.baseUrl + this.allRecipes)
  }

}
