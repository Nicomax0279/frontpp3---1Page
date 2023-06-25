import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  route = `${environment.BASEURL}/api/user/`
  
  constructor(private http:HttpClient){}






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


getUser():Observable<user> {
  return this.http.get<user>(this.route, this.getOptions());
}
getUserMyUser():Observable<user> {
  return this.http.get<user>(`${this.route}myUser`, this.getOptions());
}
putMyUser(user:user):Observable<user>{
  console.log(user);
  return this.http.put<user>(`${this.route}myUser`,user, this.getOptions());
}
}
