import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { user } from '../../interfaces/user';
import { LocalStorageServiceService } from '../../services/local-storage-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
 
export class SignupComponent {
  form!:FormGroup
  careers:string[] = [
    'Analista de sistemas' , 'Emfermeria', 'Radiologia','Seguridad y Higiene', "Administracion de empresas"
  ]

    loading = false
    constructor(private fb:FormBuilder ,private router:Router, private _authService:AuthServiceService , private _LocalStorageServiceService:LocalStorageServiceService , private _snackBar:MatSnackBar){
      this.form = this.fb.group({
        user: ["@itbeltran.com.ar" , [Validators.email,Validators.required]  ],
        password: ["" , Validators.required ],
        name: ["" , Validators.required ],
        surname: ["" , Validators.required ],
        birthdate :  ["" , Validators.required ],
        career :["" , Validators.required ]
      }) 
  
    }
 
    sus!:Subscription;
    singup(){
      const singupUser:user ={
        username : this.form.value.user,
        password : this.form.value.password,
        names : this.form.value.name,
        surnames : this.form.value.surname,
        birthdate : this.form.value.birthdate,
        career : this.form.value.career,
        description: '' 

      }
      if(!this.validateEmail(singupUser.username)){
        alert("the email must contain @itbeltran.com.ar")
      }else{
      this.sus = this._authService.signup(singupUser).subscribe({next: (res)=>{
        if(res.token){
          this._LocalStorageServiceService.setToken(res.token)
          this._LocalStorageServiceService.setUsername(singupUser.username)
          this.router.navigate(["main"])
        }else if(res.Response == "signup successfully"){
          this._snackBar.open("usuario registrado", "",{
            duration : 1500,
            horizontalPosition:'center',
            verticalPosition:"bottom"
          })
          this.router.navigate(["login"])
        }
        else{
          this._snackBar.open("ocurrio un error", "",{
            duration : 1500,
            horizontalPosition:'center',
            verticalPosition:"bottom"
          })
        }
      },error(err:HttpErrorResponse) {
          if(err.error == 'Error: this email is already registered'){
            alert('ERROR este email ya esta registrado');
          }
          console.log(err)
      },})}
    }
    ngOnDestroy(){
      if(this.sus){
        this.sus.unsubscribe()
      }
    }
    validateEmail(email:String){   
      var dominio = "@itbeltran.com.ar";
      return email.endsWith(dominio)
    }
  }
  
