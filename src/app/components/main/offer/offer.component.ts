import { Component , Input } from '@angular/core';
import { offer } from '../../../interfaces/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  @Input() offer !: offer

  showMore:boolean = false
  signupOffert(){
    console.log(this.offer)
    alert(`incribirse a  , ${this.offer.id}`)
  }
}
