import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './auth/components/about-us/about-us.component';
import { ContactComponent } from './auth/components/contact/contact.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { CollectionsComponent } from './products/components/collections/collections.component';
import { DetailsComponent } from './products/components/details/details.component';
import { HomeComponent } from './products/components/home/home.component';

const routes: Routes = [
  {path: "" ,redirectTo: "home",pathMatch: "full"},
  {path: "home" , component:HomeComponent},
  {path: "collections" , component:CollectionsComponent},
  {path: "details/:id" , component:DetailsComponent},
  {path: "carts" , component:CartComponent},
  {path: "login" , component:LoginComponent},
  {path: "register" , component:RegisterComponent},
  {path: "about-us" , component:AboutUsComponent},
  {path: "contact" , component:ContactComponent},
  {path: "**" , redirectTo:"home",pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
