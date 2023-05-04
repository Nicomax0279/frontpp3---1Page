import { Injectable } from '@angular/core';
import {HttpClient   } from '@angular/common/http'
import {  Observable} from "rxjs";
import { loginUser } from '../interfaces/loginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  route = "http://localhost:8080"
  constructor(private http:HttpClient ){}


  login(user:loginUser):Observable<any>{
    return this.http.post(`${this.route}/login`,user)
  }
  logout(user:loginUser):Observable<any>{
    return this.http.post(`${this.route}/logout`,user)
  }
}
