import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'cart-page', component: CartPageComponent},
  {path:'food-page', component:FoodPageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }