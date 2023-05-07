import { Injectable } from '@angular/core';
import {HttpClient   } from '@angular/common/http'
import {  Observable} from "rxjs";
import { loginUser } from '../interfaces/loginUser';
import { user } from "../interfaces/user";
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  route = "http://localhost:8080/api/auth"
  constructor(private http:HttpClient ){}


  login(user:loginUser):Observable<any>{
    return this.http.post(`${this.route}/login`,user)
  }
  logout(user:loginUser):Observable<any>{
    return this.http.post(`${this.route}/logout`,user)
  }
  singup(user:user):Observable<any>{
    return this.http.post(`${this.route}/singup`,user)
  }
  validate():Observable<boolean>{
    return this.http.post<boolean>(`${this.route}/validate`,{})
  }
}
