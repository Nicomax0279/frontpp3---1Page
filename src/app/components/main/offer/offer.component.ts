import { offer } from 'src/app/interfaces/offer';

import { Component , ElementRef, Input, ViewChild } from '@angular/core';

import {InscriptionService} from "../../../services/inscription.service"
import { HttpErrorResponse } from '@angular/common/http';
import { Snack2Component } from '../../snack2/snack2.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  @Input() offer !: offer
  @Input() BrockButton:boolean =  false
  @ViewChild('descriptionText') descriptionText: ElementRef | undefined;
  shortTextRowspan = 34
  constructor(private _InscriptionService:InscriptionService , private _snackBar:MatSnackBar){

  }
  ngOnInit(){


    if(this.offer.isInscribed == 1){this.BrockButton = true}

    setTimeout(() => {

      if(this.descriptionText){
        const textContentHeight = this.descriptionText.nativeElement.offsetHeight;
        this.shortTextRowspan = Math.ceil(textContentHeight / 28);
      }
    }, 0);


  }
  ngAfterViewInit() {

  }
  showSnack(message: string) {
    this._snackBar.openFromComponent(Snack2Component, {
      duration: 5000,
      data: {
        message: message,
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
  }
  showMore:boolean = false


  signupOffer(){



      if(this.offer.id)this._InscriptionService.postInscription(this.offer.id).subscribe({next:()=>{this._snackBar.openFromComponent(Snack2Component, {
        duration: 5000,

        data: {
          message: 'te has inscrito  correctamente a la oferta',
          config: {
            iconType: 'icon',
            iconValue: 'description',
            type: 'successful',
            useImage: true,
          },
          preClose: () => {
            this._snackBar.dismiss();
          },
        },
      }); this.offer.isInscribed = 1; this.BrockButton = true},error:(err)=>{
        if(err.error == 'Error: inscription replicate error') this.showSnack('error Ya esta inscrito')
      else if(err.error == 'Error: career validation error')this.showSnack('solo te puedes inscribir a ofertas de tu carera')
      else this.showSnack("A ocurrido un ERROR")

      }

  })

  }
}
