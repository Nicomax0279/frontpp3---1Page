import { Injectable } from '@angular/core';
import {HttpClient, HttpParams   } from '@angular/common/http'
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

  activateAccount(code:string,username:string):Observable<boolean>{
    let params = new HttpParams();
    if(code) params = params.append('code', code);
    if(username)  params = params.append('username', username);
    return this.http.post<boolean>(`${this.route}/activateUser`,{},{params})
  }
  changePassword(code:string,username:string,password:string):Observable<boolean>{
    let params = new HttpParams();
    if(code) params = params.append('code', code);
    if(username)  params = params.append('username', username);
    if(password)  params = params.append('password', password);
    return this.http.post<boolean>(`${this.route}/changePassword`,{},{params})
  }

  generateCode(username:string):Observable<boolean>{
    let params = new HttpParams();
    if(username)  params = params.append('username', username);
    return this.http.post<boolean>(`${this.route}/generateCode`,{},{params})
  }
}

