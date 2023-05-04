import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Subscriber, Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { loginUser } from 'src/app/interfaces/loginUser';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup
  loading = false
  constructor(private fb:FormBuilder ,private router:Router, private _authService:AuthServiceService, private _LocalStorageServiceService:LocalStorageServiceService){
    this.form = this.fb.group({
      user: ["" , [Validators.email,Validators.required]  ],
      password: ["" , Validators.required ],
    })

  }
  sus!:Subscription
  login(){
    const loginUser:loginUser ={
      username : this.form.value.user,
      password : this.form.value.password
    }
    this.sus = this._authService.login(loginUser).subscribe({next: (res)=>{
      if(res.token){
        this._LocalStorageServiceService.setToken(res.token)
        this.router.navigate(["main"])
      }else{
        alert("ocurrio un error");
      }
    },error(err:HttpErrorResponse) {
        console.log(err)
    },})
  }
validateEmail(email:string){
  
  }

  
ngOnDestroy(){
 this.sus.unsubscribe()
}


}
