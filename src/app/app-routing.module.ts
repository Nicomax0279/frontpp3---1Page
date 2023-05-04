import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { OffersComponent } from './components/main/offers/offers.component';


const routes: Routes = [
  {path:'' , redirectTo: "login" , pathMatch: 'full'},
 {path:'login' , component:LoginComponent},
 {path:'main', component:MainComponent,children:[
  {path:'' , component:OffersComponent}
 ]}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
