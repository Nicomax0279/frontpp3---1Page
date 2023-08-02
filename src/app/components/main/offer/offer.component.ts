import { Component , Input } from '@angular/core';
import { offer } from '../../../interfaces/offer';
import {InscriptionService} from "../../../services/inscription.service"
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  @Input() offer !: offer
  @Input() BrockButton:boolean = false
  constructor(private _InscriptionService:InscriptionService){}
  showMore:boolean = false
  signupOffert(){
   
    if(this.offer.id)this._InscriptionService.postInscription(this.offer.id).subscribe({next(value) {
        
      alert("Inscripcion completada")
    },error(err) {
      if(err.error == 'Error: inscription replicate error') alert('error Ya esta inscrito')
      else alert("A ocurrido un ERROR")
        console.log(err);
    },})
  }
}
