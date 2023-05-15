import { Injectable } from '@angular/core';
import {HttpClient   } from '@angular/common/http'
import {  Observable} from "rxjs";
import {} from './local-storage-service.service'
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  route = "http://localhost:8080/api/offer"
  constructor(private http:HttpClient){}
  




}
