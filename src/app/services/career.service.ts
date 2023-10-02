import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { career } from '../interfaces/career';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  route = `${environment.BASEURL}/api/career`
  constructor(private http:HttpClient ){}

  getCareers():Observable<career[]>{
    return this.http.get<career[]>(this.route);
  }

}
