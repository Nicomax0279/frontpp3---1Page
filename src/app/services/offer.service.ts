import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders   } from '@angular/common/http'
import {  Observable} from "rxjs";
import {offer} from '../interfaces/offer'
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  route = "http://localhost:8080/api/offer"
  constructor(private http:HttpClient){}
  
processParamsObject(paramsObject:any){
  const paramsArray = [];
for (let param in paramsObject) {
  if (paramsObject.hasOwnProperty(param)) {
    const value = paramsObject[param];
    const elemento = { param, value };
    paramsArray.push(elemento);
  }
}
return paramsArray
}




getToken() {
  
  let token = localStorage.getItem("token");
  
  if (token) {
    return token;
  } else {
   
    return "";
  }
}


getOptions() {
  
  let token = this.getToken();
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  let options = {
    headers: headers,
  };
  return options;
}



getOffers() {
  return this.http.get<offer[]>(this.route, this.getOptions());
}


getOffertById(id:number) {

  return this.http.get<offer>(`${this.route}/${id}`, this.getOptions());
}


getOffersParams(params:Object) {


  const paramsArray = this.processParamsObject(params)
  let paramsUrl:string = ''
  paramsArray.forEach(e=>{
    paramsUrl += `${e.param}=${e.value}&`
  })

  return this.http.get<offer[]>(`${this.route}${paramsUrl}`, this.getOptions());
}








}