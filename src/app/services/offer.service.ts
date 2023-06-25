import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders   } from '@angular/common/http'
import {  Observable} from "rxjs";
import {offer} from '../interfaces/offer'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OfferService {
  route = `${environment.BASEURL}/api/offer/`
  
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
  
  let token =localStorage.getItem("token");

  if (token) {
    return token;
  } else {
    return "";
  }
}


getOptions() {
  
  let token = this.getToken();

	
  let headers = new HttpHeaders({'Authorization': 'Bearer ' + token})
  
  let options = {
    headers: headers
  };
  return options
}


getOffers():Observable<offer[]> {
  return this.http.get<offer[]>(this.route, this.getOptions());
}


getOffertById(id:number):Observable<offer> {

  return this.http.get<offer>(`${this.route}${id}`, this.getOptions());
}


getOffersParams(params:string) {


  // const paramsArray = this.processParamsObject(params)
  // let paramsUrl:string = '?'
  // paramsArray.forEach(e=>{
  //   paramsUrl += `${e.param}=${e.value}&`
  // })

  
   params?params:params='';
  return this.http.get<offer[]>(`${this.route}${params}`, this.getOptions());
}

postOffer(offer:offer){
  return this.http.post<offer>(this.route,offer, this.getOptions());
}

signupOffer(offerId:number){
  return this.http.post<offer>(`${this.route}signup`,offerId, this.getOptions());
}
isSingupOffer(offerId:number){
  return this.http.post<offer>(`${this.route}isSignup`,offerId, this.getOptions());
}
getMySignupOffers(){
  return this.http.get<offer[]>(`${this.route}myOffers`, this.getOptions());
}
}