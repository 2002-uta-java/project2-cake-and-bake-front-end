import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  response: any;

  constructor(private recipeService: RecipeService, private http: HttpClient) { }

  ngOnInit() {
    const response = this.recipeService.getAllRecipes();
    // const response = this.http.get("http://3.14.28.165/cake-and-bake/recipes/full/3");
    console.log("showing response" + response[0]);
    response.subscribe(response => {
      console.log(response)
      this.response = response;
    });
  }

}
