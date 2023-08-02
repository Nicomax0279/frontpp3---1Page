import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { inscription } from '../interfaces/inscription';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http:HttpClient) { }
  route = `${environment.BASEURL}/api/inscription/`
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
  
  postInscription(offerID:number){
    return this.http.post<inscription>(this.route,{offerID:offerID}, this.getOptions());
  }
  getUsers(offerID:number){
    return this.http.get(`${this.route}${offerID}/users`, this.getOptions());
  }
}
