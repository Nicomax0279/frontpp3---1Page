import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Snack2Component } from 'src/app/components/snack2/snack2.component';
import { career } from 'src/app/interfaces/career';
import { offer } from 'src/app/interfaces/offer';
import { CareerService } from 'src/app/services/career.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-CreateOffer',
  templateUrl: './crate-offert.component.html',
  styleUrls: ['./crate-offert.component.css']
})
export class CreateOfferComponent {
  careers!:career[]
  modalities:string[]= ['presencial','hibrido',"remoto"]
  sus!:Subscription;
  form!:FormGroup
  constructor(
    private fb:FormBuilder,
    private _offerService:OfferService,
    private _careerService:CareerService,
    private _snackBar:MatSnackBar
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
    this.sus = this._careerService.getCareers().subscribe(c=>this.careers=c)
  }
  createOffer(){
    if(this.sus){
      this.sus.unsubscribe()
    }
    let offer:offer = this.form.value;
    this.sus = this._offerService.postOffer(offer).subscribe({next :(value)=> {
      this._snackBar.openFromComponent(Snack2Component, {
        duration: 5000,

        data: {
          message: 'Oferta creada correctamente',
          config: {
            iconType: 'icon',
            iconValue: 'local_offer',
            type: 'successful',
            useImage: true,
          },
          preClose: () => {
            this._snackBar.dismiss();
          },
        },
      })
    },error:(err)=>{
      this._snackBar.openFromComponent(Snack2Component, {
        duration: 5000,
        data: {
          message: 'A ocurrido un error',
          config: {
            iconType: 'icon',
            iconValue: 'error',
            type: 'error',
            useImage: true,
          },
          preClose: () => {
            this._snackBar.dismiss();
          },
        },
      });
    },})

  }

  ngOnDestroy(){
    if(this.sus){
      this.sus.unsubscribe()
    }
  }

}
