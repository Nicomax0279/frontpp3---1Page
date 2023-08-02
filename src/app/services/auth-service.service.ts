import { Injectable } from '@angular/core';
import {HttpClient   } from '@angular/common/http'
import {  Observable} from "rxjs";
import { loginUser } from '../interfaces/loginUser';
import { user } from "../interfaces/user";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  route = `${environment.BASEURL}/api/auth`
  constructor(private http:HttpClient ){}


  login(user:loginUser):Observable<any>{

    return this.http.post(`${this.route}/login`,user)
  }
  loginCompany(user:loginUser):Observable<any>{

    return this.http.post(`${this.route}/loginCompany`,user)
  }
  logout(user:loginUser):Observable<any>{
    return this.http.post(`${this.route}/logout`,user)
  }
  signup(user:user):Observable<any>{
    return this.http.post(`${this.route}/signup`,user)
  }
  validate(token:string):Observable<boolean>{
    return this.http.post<boolean>(`${this.route}/verifies`, {token:`Bearer ${token}`})
  }
}
