import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams   } from '@angular/common/http'
import {  Observable} from "rxjs";
import {offer} from '../interfaces/offer'
import { environment } from 'src/environments/environment';
import { user } from '../interfaces/user';
import { company } from '../interfaces/company';
import { filters } from '../interfaces/body';
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


getOffers():Observable<offer[]>{
  return this.http.get<offer[]>(this.route, this.getOptions());
}


getOffertById(id:number):Observable<offer> {

  return this.http.get<offer>(`${this.route}${id}`, this.getOptions());
}


getOffersParams(filters:filters={career:'',companyName:'',modality:'',title:''}) {


  // const paramsArray = this.processParamsObject(params)
  // let paramsUrl:string = '?'
  // paramsArray.forEach(e=>{
  //   paramsUrl += `${e.param}=${e.value}&`
  // })

  let params = new HttpParams();
  if(filters.career) params = params.append('career', filters.career);
  if(filters.companyName)  params = params.append('companyName', filters.companyName);
  if(filters.modality) params = params.append('modality', filters.modality);
  if(filters.title) params = params.append('title', filters.title);


  return this.http.get<offer[]>(`${this.route}`, {...this.getOptions(), params});
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


putOfferById(offerID:number,offer:offer):Observable<{Response:string}>{
  return this.http.put<{Response:string}>(`${this.route}${offerID}`,offer, this.getOptions());
}

deleteOfferById(offerID:number):Observable<{Response:string}>{
  return this.http.delete<{Response:string}>(`${this.route}${offerID}`, this.getOptions());
}
}
