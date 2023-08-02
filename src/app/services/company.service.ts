import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { company } from '../interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  constructor(private http:HttpClient ){}
  route = `${environment.BASEURL}/api/company/`
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
  getMyCompany():Observable<company>{
    return this.http.get<company>(`${this.route}myCompany`, this.getOptions());
  }



}
