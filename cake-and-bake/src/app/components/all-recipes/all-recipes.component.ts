import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const response = this.http.get("http://3.14.28.165/cake-and-bake/recipes/full/3");
    console.log("showing response");
    response.subscribe(response => {
      console.log(response)
      this.response = response;
    });
  }

}
