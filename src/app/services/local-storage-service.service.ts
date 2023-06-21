
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }
  setToken(Token:string){
    localStorage.setItem('token',  Token)
  }
  getToken(){
    //@ts-ignore
    
    return localStorage.getItem('token');
  }
  destroyToken(){
    localStorage.removeItem("token")
  }


  setUsername(username:string){
    localStorage.setItem('username',  username)
  }
  getUsername(){
    //@ts-ignore
    return localStorage.getItem('username');
  }
  destroyUsername(){
    localStorage.removeItem("username")
  }


}
