import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { career } from 'src/app/interfaces/career';
import { offer } from 'src/app/interfaces/offer';
import { CareerService } from 'src/app/services/career.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent {
  careers!:career[]
  modalities:string[]= ['presencial','hibrido',"remoto"]

  offerID!:number
  offer!:offer
  form!:FormGroup


  sus?:Subscription
  sus2?:Subscription
  constructor(private _ActivatedRoute:ActivatedRoute , private _OfferService:OfferService ,   private fb:FormBuilder, private router:Router , private _careerService:CareerService){
    this.form = this.fb.group({
      title: ["" , Validators.required ],
      career: ["" , Validators.required ],
      modality: ["" , Validators.required ],
      shortText :  ["" , Validators.required ],
      text :["" , Validators.required ]
    }) 
  }
 

  updateOffer(){
    this._OfferService.putOfferById(this.offerID,this.form.value).subscribe((res)=>{
      
      if(res.Response == 'offer updated successfully')this.router.navigate(['company'])
    })
  }
  ngOnInit(){
    this.offerID = this._ActivatedRoute.snapshot.params["id"];
    this.sus = this._OfferService.getOffertById(this.offerID).subscribe(res=>{
        this.offer = res
        const {title , career ,shortText , modality , text  } = res
        this.form.setValue({title:title,career:career,shortText:shortText,modality:modality,text:text})
      })
      this.sus2 = this._careerService.getCareers().subscribe(c=>this.careers=c)
  }
  ngOnDestroy(){
    if(this.sus){
      this.sus.unsubscribe()
    }
    if(this.sus2){
      this.sus2.unsubscribe()
    }
  }
  
}
