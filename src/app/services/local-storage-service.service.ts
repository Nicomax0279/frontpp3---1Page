
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }
  setToken(Token:string){
    localStorage.setItem('token',  JSON.stringify(Token))
  }
  getToken(){
    //@ts-ignore
    return JSON.parse(localStorage.getItem('token'));
  }
  destroyToken(){
    localStorage.removeItem("token")
  }



}
