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
  
  let token = JSON.parse(this.getToken());
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  let options = {
    headers: headers,
  };
  return options;
}



getOffers():Observable<offer[]> {
  return this.http.get<offer[]>(this.route, this.getOptions());
}


getOffertById(id:number):Observable<offer> {

  return this.http.get<offer>(`${this.route}/${id}`, this.getOptions());
}


getOffersParams(params:Object) {


  const paramsArray = this.processParamsObject(params)
  let paramsUrl:string = '?'
  paramsArray.forEach(e=>{
    paramsUrl += `${e.param}=${e.value}&`
  })

  return this.http.get<offer[]>(`${this.route}${paramsUrl}`, this.getOptions());
}

postOffer(offer:offer){
  return this.http.post<offer>(this.route,offer, this.getOptions());
}

signupOffer(offerId:number){
  return this.http.post<offer>(`${this.route}/signup`,offerId, this.getOptions());
}
isSingupOffer(offerId:number){
  return this.http.post<offer>(`${this.route}/isSignup`,offerId, this.getOptions());
}
getMySignupOffers(){
  return this.http.get<offer[]>(`${this.route}/myOffers`, this.getOptions());
}
}