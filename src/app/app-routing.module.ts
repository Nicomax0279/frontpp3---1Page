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
import { CompanyLoginComponentComponent } from './company/company-login-component/company-login-component.component';
import { OffersManagerComponent } from './company/offers-manager/offers-manager.component';
import { UpdateOfferComponent } from './company/offers-manager/update-offer/update-offer.component';
import { LookInscriptionsComponent } from './company/offers-manager/look-inscriptions/look-inscriptions.component';
import { RootComponent } from './components/root/root.component';
import { InfoContentComponent } from './components/infoContent/infoContent.component';
import { CodeValidationComponent } from './components/code-validation/code-validation.component';




const routes: Routes = [
  {path:'' ,  component:RootComponent, children:[
    {path:'signup' , component:SignupComponent},
    {path:'login' , component:LoginComponent},
    {path:'' , component:InfoContentComponent},
    {path:'code' , component:CodeValidationComponent},
     {
  path:'companyLogin' ,component:CompanyLoginComponentComponent
 }
  ]},
//   {path:'signup' , component:SignupComponent},
//  {path:'login' , component:LoginComponent},
 {path:'main', component:MainComponent, canActivate:[TokenValidGuard],
 children:[
  {path:'' , component:OffersComponent},
  {path:'profile', component:ProfileComponent}
 ]},
//  {
//   path:'companyLogin' ,component:CompanyLoginComponentComponent
//  },

{path:'company', component:LayoutComponent , canActivate:[TokenValidGuard],
children:[
  {path:'' , component: OffersManagerComponent},
  {path:'createOffer' , component:CreateOfferComponent},
  {path:'updateOffer/:id' , component:UpdateOfferComponent},
  {path :'lookInscriptions/:id' , component:LookInscriptionsComponent}
]}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
