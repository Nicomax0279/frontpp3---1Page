import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { user } from '../interfaces/user';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  form!:FormGroup
    loading = false
    constructor(private fb:FormBuilder ,private router:Router, private _authService:AuthServiceService){
      this.form = this.fb.group({
        user: ["" , [Validators.email,Validators.required]  ],
        password: ["" , Validators.required ],
      })
  
    }
    sus:any
    singup(){
      const singupUser:user ={
        username : this.form.value.user,
        password : this.form.value.password,
        name : this.form.value.name,
        surname : this.form.value.surname

        
      }
      this.sus = this._authService.singup(singupUser).subscribe(e=>console.log(e))
      //this.router.navigate(["main"])
  
    }
}
