import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable , of , map } from 'rxjs';
import { LocalStorageServiceService } from '../services/local-storage-service.service';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenValidGuard implements CanActivate {
  constructor(private _LocalStorageServiceService:LocalStorageServiceService, private _AuthServiceService:AuthServiceService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.haveAToken()){
      
        let token = this._LocalStorageServiceService.getToken()
      
      //console.log(body)
      // fetch('http://localhost:8080/api/auth/verifies',{
      //   body : JSON.stringify(body)
      //   ,method : 'post'
      // })
      // @ts-ignore
      return this._AuthServiceService.validate(token)
      
     //httppValidation
      // return this._AuthServiceService.validate().pipe(
      //   map(e=>{
      //     console.log(e)
      //     if(e){
      //       return true
      //     }else{
      //       return
      //     }
      //   }),
      //   ((err) => {
      //     this.router.navigate(['/login']);
      //     return of(false);
      //   })
      // ) 
     
      //return true
    }else{
      this.router.navigate(["login"])
      return false
      
    }
    
  }

  haveAToken():boolean{
     if(this._LocalStorageServiceService.getToken()){
        return true
     }else{
        return false
     }
  }

}
