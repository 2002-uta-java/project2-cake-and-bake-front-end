import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  constructor(private http: HttpClient) { }

  createRecipe(newRecipe){
    console.log("service: " + newRecipe)
    return this.http.post('/recipe', newRecipe);
  }

}
