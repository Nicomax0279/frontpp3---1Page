import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { user } from '../../interfaces/user';
import { LocalStorageServiceService } from '../../services/local-storage-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CareerService } from 'src/app/services/career.service';
import { career } from 'src/app/interfaces/career';
import { Snack2Component } from '../snack2/snack2.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  sus?:Subscription;
  form!:FormGroup
  careers!:career[]
  ngOnInit(){
    this.sus = this._careerService.getCareers().subscribe(c=>this.careers=c)

  }
    loading = false
    constructor(private fb:FormBuilder ,private router:Router, private _authService:AuthServiceService , private _LocalStorageServiceService:LocalStorageServiceService , private _snackBar:MatSnackBar , private _careerService:CareerService){
      this.form = this.fb.group({
        user: ["@itbeltran.com.ar" , [Validators.email,Validators.required]  ],
        password: ["" , Validators.required ],
        name: ["" , Validators.required ],
        surname: ["" , Validators.required ],
        birthdate :  ["" , Validators.required ],
        career :["" , Validators.required ]
      })

    }
    showSnack(message: string) {
      this._snackBar.openFromComponent(Snack2Component, {
        duration: 5000,
        data: {
          message: message,
          config: {
            iconType: 'icon',
            iconValue: 'error',
            type: 'error',
            useImage: true,
          },
          preClose: () => {
            this._snackBar.dismiss();
          },
        },
      });
    }

    singup(){
      if(this.sus){
        this.sus.unsubscribe()
      }
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
        this.showSnack("el email debe terminar con @itbeltran.com.ar")
      }else{
      this.sus = this._authService.signup(singupUser).subscribe({next: (res)=>{
        console.log(res)
        if(res.token){
          this._LocalStorageServiceService.setToken(res.token)
          this._LocalStorageServiceService.setUsername(singupUser.username)
          this.router.navigate(["main"])
        }else if(res.Response == "signup successfully"){
          this._snackBar.openFromComponent(Snack2Component, {
            duration: 5000,

            data: {
              message: 'Usuario registrado correctamente por favor active su cuenta via email',
              config: {
                iconType: 'icon',
                iconValue: 'person_add',
                type: 'successful',
                useImage: true,
              },
              preClose: () => {
                this._snackBar.dismiss();
              },
            },
          })

        }
        else{
          this.showSnack("ocurrió un error"
          )
        }
      },error:(err:HttpErrorResponse)=>{
          if(err.error == 'Error: this email is already registered'){
            this.showSnack('ERROR este email ya esta registrado');
          }

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

