import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-nav-company',
  templateUrl: './nav-company.component.html',
  styleUrls: ['./nav-company.component.css']
})
export class NavCompanyComponent {
  menu:Menu[] = [
    {name:"HOME" , redirect:'/company'},
    {name:"createOffer" , redirect:'/company/createOffer'}
];
constructor(private _LocalStorageServiceService:LocalStorageServiceService, private router:Router){

  // this.loadMenu()
}
logout(){

  
  this._LocalStorageServiceService.destroyToken()
  this.router.navigate(["login"])
}
}
