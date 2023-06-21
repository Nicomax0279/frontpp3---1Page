import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { OffersComponent } from './components/main/offers/offers.component';
import { SignupComponent } from './components/signup/signup.component';
import { TokenValidGuard } from './guards/token-valid.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { LayoutComponent } from './company/layout/layout.component';
import { CreateOfferComponent } from './company/CreateOffer/crate-offert.component';
import { CompanyMainComponent } from './company/company-main/company-main.component';


const routes: Routes = [
  {path:'' , redirectTo: "login" , pathMatch: 'full'},
  {path:'signup' , component:SignupComponent},
 {path:'login' , component:LoginComponent},
 {path:'main', component:MainComponent, canActivate:[TokenValidGuard],
 children:[
  {path:'' , component:OffersComponent},
  {path:'profile', component:ProfileComponent}
 ]},
{path:'company', component:LayoutComponent , canActivate:[TokenValidGuard],
children:[
  {path:'' , component: CompanyMainComponent},
  {path:'createOffer' , component:CreateOfferComponent}
]}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
