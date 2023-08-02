import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { offer } from 'src/app/interfaces/offer';

@Component({
  selector: 'app-look-offer-dialog',
  templateUrl: './look-offer-dialog.component.html',
  styleUrls: ['./look-offer-dialog.component.css']
})
export class LookOfferDialogComponent {

  
  constructor(@Inject(MAT_DIALOG_DATA) public offer: offer ,  private matDialogRef:MatDialogRef<LookOfferDialogComponent>){}

  closeDialog(){
    this.matDialogRef.close(undefined);
  }
  
}
