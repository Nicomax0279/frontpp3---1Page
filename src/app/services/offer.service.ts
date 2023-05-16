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



getOffer() {
  // Usar el método get del HttpClient para enviar una petición GET a la URL base con las opciones del método getOptions()
  return this.http.get<offer[]>(this.route, this.getOptions());
}

// Definir un método para obtener un alumno por su nombre
getOffert(id:number) {
  // Usar el método get del HttpClient para enviar una petición GET a la URL base con el nombre como parámetro y las opciones del método getOptions()
  return this.http.get<offer>(`${this.route}/${id}`, this.getOptions());
}










}