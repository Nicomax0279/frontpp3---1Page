
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filters } from 'src/app/interfaces/body';
import { offer } from 'src/app/interfaces/offer';
import { OfferService } from 'src/app/services/offer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  params?:filters
  offers!:offer[]
  sus!:Subscription
  constructor(
    private _OfferService:OfferService , private route: ActivatedRoute , private router: Router
  ){

  }
  ngOnInit(){
    let queryParams = this.route.snapshot.queryParamMap;
    // Acceder a los valores de los query parameters
    let companyName = queryParams.get('companyName');
    let modality = queryParams.get('modality');
    let career = queryParams.get('career');
    let title = queryParams.get('title');
    if(!career) career = ''
    if(!modality) modality = ''
    if(!companyName) companyName = ''
    if(!title) title = ''
    if(!this.params){
    this.params =  {companyName, career , modality,title}}

    this.sus = this._OfferService.getOffersParams(this.params).subscribe({
      next: (e)=> this.offers = e,
      error: (error)=>{
      if(error.error = 'validation token error') {localStorage.removeItem('token'); window.location.reload()}
      console.log(error)}
    })
  }
  updateFilter(filters:filters){
    this.router.navigate(['/main'],{queryParams:filters, relativeTo: this.route})
    this.params = filters
    this.ngOnInit()
  }
  ngOnDestroy(){
    if(this.sus){
      this.sus.unsubscribe()
    }
  }
}
