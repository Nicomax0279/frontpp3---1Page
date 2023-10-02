import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { Menu } from 'src/app/interfaces/menu';
import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  menu:Menu[] = [
    {name:"Inicio" , redirect:'/main'},
    {name:"Perfil" , redirect:'/main/profile'}
];

  constructor(private _LocalStorageServiceService:LocalStorageServiceService, private router:Router){

    // this.loadMenu()
  }
  logout(){


    this._LocalStorageServiceService.destroyToken()
    this.router.navigate(["login"])
  }
  // loadMenu(){
  //   this._menuService.getMenu().subscribe(data=>{
  //     this.menu = data
  //   })
  }
