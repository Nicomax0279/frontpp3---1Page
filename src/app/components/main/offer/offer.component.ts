import { Component , Input } from '@angular/core';
import { offer } from 'src/app/interfaces/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  @Input() offer !: offer

  showMoere:boolean = false

}
