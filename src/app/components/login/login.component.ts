import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { loginUser } from 'src/app/interfaces/loginUser';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';
import { Snack2Component } from '../snack2/snack2.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthServiceService,
    private _LocalStorageServiceService: LocalStorageServiceService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      user: ['@itbeltran.com.ar', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
  sus!: Subscription;
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
  login() {
    const loginUser: loginUser = {
      username: this.form.value.user.toLowerCase(),
      password: this.form.value.password,
    };
    //"el email debe contener @itbeltran.com.ar"
    if (!this.validateEmail(loginUser.username)) {
      this.showSnack('el email debe contener @itbeltran.com.ar')

    } else {

        this.sus = this._authService.login(loginUser).subscribe({
          next: (res) => {
            if (res.token) {
              this._LocalStorageServiceService.setToken(res.token);
              this._LocalStorageServiceService.setUsername(loginUser.username);

              this.router.navigate(['main']);
            } else {
              this.showSnack('ocurrió un error');
            }
          },
          error : (err: HttpErrorResponse)=>{
            if (err.error == 'Error: email not registered') {
              this.showSnack('ERROR este email no esta registrado');
            } else if (err.error == 'Error: active your user via email') {
              this.showSnack('se a enviado un código a tu email para activar la cuenta');
            }else if (err.error == 'Error: credentials error') {
              this.showSnack('error de credenciales');
            }
          },
        });


    }
  }
  validateEmail(email: String) {
    var dominio = '@itbeltran.com.ar';
    email = email.toLowerCase();
    return email.endsWith(dominio);

    // return email.includes("@itbeltran.com.ar")
  }

  ngOnDestroy() {
    if (this.sus) {
      this.sus.unsubscribe();
    }
  }
}
