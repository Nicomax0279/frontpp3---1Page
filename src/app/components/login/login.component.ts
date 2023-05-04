import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { loginUser } from 'src/app/interfaces/loginUser';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup
  loading = false
  constructor(private fb:FormBuilder ,private router:Router, private _authService:AuthServiceService){
    this.form = this.fb.group({
      user: ["" , [Validators.email,Validators.required]  ],
      password: ["" , Validators.required ],
    })

  }
  sus:any
  login(){
    const loginUser:loginUser ={
      username : this.form.value.user,
      password : this.form.value.password
    }
    this.sus = this._authService.login(loginUser).subscribe(e=>console.log(e))
    this.router.navigate(["main"])

  }
validateEmail(email:string){
  
  }

  
ngOnDestroy(){

}


}
