import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { RecipeComponent } from './components/recipe/recipe.component';


const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path: '',
    component: HomeComponent
  },{
    path: 'recipe/id',
    component: RecipeComponent
  }]
},{
  path: 'login',
  component: LoginComponent
},{
  path: 'register',
  component: RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
