import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { offer } from 'src/app/interfaces/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-CreateOffer',
  templateUrl: './crate-offert.component.html',
  styleUrls: ['./crate-offert.component.css']
})
export class CreateOfferComponent {
  careers:string[] = [
    'Analista de sistemas' , 'Emfermeria', 'Radiologia','Seguridad y Higiene', "Administracion de empresas"
  ]
  modalities:string[]= ['presencial','hibrido',"remoto"]
  sus!:Subscription;
  form!:FormGroup
  constructor(
    private fb:FormBuilder,
    private _offerService:OfferService
  ){
    this.form = this.fb.group({
      title: ["" , Validators.required ],
      career: ["" , Validators.required ],
      modality: ["" , Validators.required ],
      shortText :  ["" , Validators.required ],
      text :["" , Validators.required ]
    }) 
  }
  ngOnInit(){

  }
  createOffer(){
    
    let offer:offer = this.form.value;
    this.sus = this._offerService.postOffer(offer).subscribe({next(value) {
     alert("Oferta Cargada")   
    },error(err) {
      console.log(err)
        alert("ocurrio un error")
    },})

  }

  ngOnDestroy(){
    if(this.sus){
      this.sus.unsubscribe()
    }
  }

}
