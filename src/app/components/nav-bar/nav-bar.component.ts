import { Component } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  menu:Menu[] = [{
    name:"login" , redirect:'/login'
  }];

  constructor(){
    // this.loadMenu()
  }
  // loadMenu(){
  //   this._menuService.getMenu().subscribe(data=>{
  //     this.menu = data
  //   })
  }
