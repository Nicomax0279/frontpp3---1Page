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
import { LayoutComponent } from './company/layout/layout.component';
import { NavCompanyComponent } from './company/nav-company/nav-company.component';
import { CreateOfferComponent } from './company/CreateOffer/crate-offert.component';
import { ImgNotFoundDirective } from './img-not-found.directive';
import { UpdateDialogComponent } from './components/profile/update-dialog/update-dialog.component';
import { CompanyMainComponent } from './company/company-main/company-main.component';
import { CompanyLoginComponentComponent } from './company/company-login-component/company-login-component.component';
import { OffersManagerComponent } from './company/offers-manager/offers-manager.component';
import { LookUserComponent } from './company/offers-manager/look-user/look-user.component';
import { LookOfferDialogComponent } from './company/offers-manager/look-offer-dialog/look-offer-dialog.component';
import { UpdateOfferComponent } from './company/offers-manager/update-offer/update-offer.component';
import { LookInscriptionsComponent } from './company/offers-manager/look-inscriptions/look-inscriptions.component';
import { FiltersComponent } from './components/main/filters/filters.component';
import { InfoContentComponent } from './components/infoContent/infoContent.component';
import { basicNavBarComponent } from './components/basic-nav-bar/basic-nav-bar.component';
import { RootComponent } from './components/root/root.component';
import { CodeValidationComponent } from './components/code-validation/code-validation.component';
import { Snack2Component } from './components/snack2/snack2.component';


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
    ProfileCardComponent,
    LayoutComponent,
    NavCompanyComponent,
    CreateOfferComponent,
    ImgNotFoundDirective,
    UpdateDialogComponent,
    CompanyMainComponent,
    CompanyLoginComponentComponent,
    OffersManagerComponent,
    LookUserComponent,
    LookOfferDialogComponent,
    UpdateOfferComponent,
    LookInscriptionsComponent,
    FiltersComponent,
    InfoContentComponent,
    basicNavBarComponent,
    RootComponent,
    CodeValidationComponent,
    Snack2Component


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
