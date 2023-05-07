import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { OffersComponent } from './components/main/offers/offers.component';
import { SingupComponent } from './singup/singup.component';
import { TokenValidGuard } from './guards/token-valid.guard';


const routes: Routes = [
  {path:'' , redirectTo: "login" , pathMatch: 'full'},
  {path:'singup' , component:SingupComponent},
 {path:'login' , component:LoginComponent},
 {path:'main', component:MainComponent, canActivate:[TokenValidGuard],
 children:[
  {path:'' , component:OffersComponent}
 ]}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
