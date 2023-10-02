import { Component, ViewChild } from '@angular/core';
import { offer } from 'src/app/interfaces/offer';
import {OfferService} from '../../services/offer.service'
import {InscriptionService} from '../../services/inscription.service'
import {CompanyService} from '../../services/company.service'
import { MatPaginator  } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';
import { LookOfferDialogComponent } from './look-offer-dialog/look-offer-dialog.component';
import { company } from 'src/app/interfaces/company';
import { Snack2Component } from 'src/app/components/snack2/snack2.component';

@Component({
  selector: 'app-offers-manager',
  templateUrl: './offers-manager.component.html',
  styleUrls: ['./offers-manager.component.css']
})
export class OffersManagerComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  resume:boolean = true
  dataSource!: any
  sus?:Subscription
  offersList:offer[] = []
  company!:company

displayedColumnsComplete: string[] = ["id",'title', 'career', 'modality',"updated_at",'shortText', "text",'inscriptions' ,'actions'];
displayedColumnsResume: string[] = ["id",'title', 'career', 'modality',"updated_at",'inscriptions' ,'actions'];
displayedColumns:string[] = this.displayedColumnsResume
constructor(private _OfferService:OfferService  ,private _CompanyService:CompanyService,private _snackBar:MatSnackBar , private matDialog:MatDialog){
  this.loadOffers();
}
toggle(event: MatSlideToggleChange) {
  event.checked? this.displayedColumns = this.displayedColumnsResume :this.displayedColumns = this.displayedColumnsComplete
  this.resume = event.checked
}





ngOnInit() {
  this._OfferService.getOffers().subscribe(res => {
     // Use MatTableDataSource for paginator
    //@ts-ignore
    this.dataSource = new MatTableDataSource(res);

    // Assign the paginator *after* dataSource is set
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
  });
  this._CompanyService.getMyCompany().subscribe(res=>{
    this.company = res
  })

}



deleteOffer(id:number):void{
  this.sus = this._OfferService.deleteOfferById(id).subscribe(res=>{
    if(res.Response == 'offer deleted successfully' ){   this._snackBar.openFromComponent(Snack2Component, {
      duration: 5000,

      data: {
        message: 'Oferta eliminada correctamente',
        config: {
          iconType: 'icon',
          iconValue: 'delete',
          type: 'successful',
          useImage: true,
        },
        preClose: () => {
          this._snackBar.dismiss();
        },
      },
    })
    this.loadOffers()
  }
  })

}


lookOffer(offer:offer):void{

  offer.name = this.company.name
  offer.logo = this.company.logo

  let dialog  = this.matDialog.open(LookOfferDialogComponent,{
    data : offer,
    width : "50%",
    height: "50%",
    position:{},

  })
}



applyFilterGlobal($event:any, stringVal:string) {
  const text = $event.target.value
  this.dataSource.filter = text.trim().toLowerCase();
}


async loadOffers(){
  const offer =  this._OfferService.getOffers()
  const v = await offer.subscribe(data=>{
    this.dataSource = new MatTableDataSource(data)
    this.offersList = data
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    return data
  })
  //v.unsubscribe()
  this.dataSource = new MatTableDataSource( this.offersList)
}

ngOnDestroy(){
  if(this.sus){
    this.sus.unsubscribe()
  }
}


}
