import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { OffersComponent } from './components/main/offers/offers.component';
import { SignupComponent } from './components/signup/signup.component';
import { TokenValidGuard } from './guards/token-valid.guard';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path:'' , redirectTo: "login" , pathMatch: 'full'},
  {path:'signup' , component:SignupComponent},
 {path:'login' , component:LoginComponent},
 {path:'main', component:MainComponent, canActivate:[TokenValidGuard],
 children:[
  {path:'' , component:OffersComponent},
  {path:'profile', component:ProfileComponent}
 ]}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
