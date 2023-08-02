import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { loginCompany } from 'src/app/interfaces/loginCompany';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-company-login-component',
  templateUrl: './company-login-component.component.html',
  styleUrls: ['./company-login-component.component.css']
})
export class CompanyLoginComponentComponent {

  form:FormGroup
  loading = false

  
  constructor(private fb:FormBuilder ,private router:Router, private _authService:AuthServiceService, private _LocalStorageServiceService:LocalStorageServiceService){
    this.form = this.fb.group({
      user: ["" , [Validators.required]  ],
      password: ["" , Validators.required ],
    })

  }
  sus!:Subscription
  login(){
    const loginCompany:loginCompany ={
      username : this.form.value.user,
      password : this.form.value.password
    }
    
    this.sus = this._authService.loginCompany(loginCompany).subscribe({next: (res)=>{
      
      if(res.token){
       
        this._LocalStorageServiceService.setToken(res.token)
        this._LocalStorageServiceService.setUsername(loginCompany.username)
        
        this.router.navigate(["company"])
      }else{
        alert("ocurrio un error");
      }
    },error(err:HttpErrorResponse) {
      if(err.error == 'Error: email not registered'){
        alert('ERROR este email no esta registrado');
      }
      
        console.log(err)
    },})}
  

  
ngOnDestroy(){
  if(this.sus){
    this.sus.unsubscribe()
  }

}
}
