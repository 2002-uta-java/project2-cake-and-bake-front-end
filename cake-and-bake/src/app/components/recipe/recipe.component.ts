import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: any;
  constructor(private recipeService: RecipeService, private http: HttpClient, private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {

    //check image url if null no pic, if not null, populate it with the picUrl

    this._route.params
      .subscribe((params: Params) => {
        this.recipeService.getRecipeById(params.id)
          .subscribe((data: any) => {
            this.recipe = data
            console.log(this.recipe)
          })
      })
  }

}
