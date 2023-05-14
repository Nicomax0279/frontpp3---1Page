import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { user } from '../interfaces/user';
import { LocalStorageServiceService } from '../services/local-storage-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingupComponent {
  form!:FormGroup
    loading = false
    constructor(private fb:FormBuilder ,private router:Router, private _authService:AuthServiceService , private _LocalStorageServiceService:LocalStorageServiceService){
      this.form = this.fb.group({
        user: ["@itbeltran.com.ar" , [Validators.email,Validators.required]  ],
        password: ["" , Validators.required ],
        name: ["" , Validators.required ],
        surname: ["" , Validators.required ],
        birthdate :  ["" , Validators.required ],
        carrer :["" , Validators.required ]
      }) 
  
    }
    sus!:Subscription;
    singup(){
      const singupUser:user ={
        username : this.form.value.user,
        password : this.form.value.password,
        name : this.form.value.name,
        surname : this.form.value.surname,
        birthdate : this.form.value.birthdate,
        carrer : this.form.value.carrer 
      
      }
      this.sus = this._authService.singup(singupUser).subscribe({next: (res)=>{
        if(res.token){
          this._LocalStorageServiceService.setToken(res.token)
          this._LocalStorageServiceService.setUsername(singupUser.username)
          this.router.navigate(["main"])
        }else{
          alert("ocurrio un error");
        }
      },error(err:HttpErrorResponse) {
          console.log(err)
      },})
    }
    ngOnDestroy(){
      if(this.sus){
        this.sus.unsubscribe()
      }
    }
  }
  
