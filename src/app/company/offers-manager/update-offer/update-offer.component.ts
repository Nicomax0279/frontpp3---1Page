import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { offer } from 'src/app/interfaces/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent {
  careers:string[] = [
    'Analista de sistemas' , 'Emfermeria', 'Radiologia','Seguridad y Higiene', "Administracion de empresas"
  ]
  modalities:string[]= ['presencial','hibrido',"remoto"]

  offerID!:number
  offer!:offer
  form!:FormGroup


  sus?:Subscription
  constructor(private _ActivatedRoute:ActivatedRoute , private _OfferService:OfferService ,   private fb:FormBuilder, private router:Router){
    this.form = this.fb.group({
      title: ["" , Validators.required ],
      career: ["" , Validators.required ],
      modality: ["" , Validators.required ],
      shortText :  ["" , Validators.required ],
      text :["" , Validators.required ]
    }) 
  }
 
    // this.sus = this._OfferService.getOffertById(this.offerID).subscribe(res=>{
    //   console.log(res)
    //   this.offer = res
    // },(error)=>console.log(error),()=>{
    //   console.log(this.offer)
    // this.form = this.fb.group({
    //   title: [this.offer.title , Validators.required ],
    //   career: [this.offer.career, Validators.required ],
    //   modality: [this.offer.modality , Validators.required ],
    //   shortText :  [this.offer.shortText , Validators.required ],
    //   text :[this.offer.text , Validators.required ]
    // })
    // })
  // }
 


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
  }
  ngOnDestroy(){
    if(this.sus){
      this.sus.unsubscribe()
    }
  }
  
}
