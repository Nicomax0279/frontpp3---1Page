import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OfferComponent } from './components/main/offer/offer.component';
import { OffersComponent } from './components/main/offers/offers.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileCardComponent } from './components/profile/profile-card/profile-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavBarComponent,
    OfferComponent,
    OffersComponent,
    SignupComponent,
    ProfileComponent,
    ProfileCardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
