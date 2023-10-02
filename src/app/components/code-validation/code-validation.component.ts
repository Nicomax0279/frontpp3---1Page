import { filters } from 'src/app/interfaces/body';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Snack2Component } from '../snack2/snack2.component';

@Component({
  selector: 'app-code-validation',
  templateUrl: './code-validation.component.html',
  styleUrls: ['./code-validation.component.css'],
})
export class CodeValidationComponent {
  mode: 'activateAccount' | 'changePassword' = 'activateAccount';
  form!: FormGroup;
  modeText(): 'Activar cuenta' | 'Cambiar contraseña' | undefined {
    if (this.mode == 'activateAccount') return 'Activar cuenta';
    if (this.mode == 'changePassword') return 'Cambiar contraseña';
    else return 'Activar cuenta';
  }
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _authServiceService: AuthServiceService,
    private router:Router
  ) {
    this.form = this.fb.group({
      username: ['@itbeltran.com.ar', [Validators.email, Validators.required]],
      code: ['', [Validators.required]],
      password: [''],
    });
  }
  use() {
    console.log(this.mode)
    if (this.mode == 'activateAccount') {
      this.validateCode();
    } else if (this.mode == 'changePassword') {
      this.changePassword();
    }
  }
  showSnackError(message: string) {
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
  showSnack(message: string) {
    this._snackBar.openFromComponent(Snack2Component, {
      duration: 5000,

      data: {
        message: message,
        config: {
          iconType: 'icon',
          iconValue: 'done',
          type: 'successful',
          useImage: true,
        },
        preClose: () => {
          this._snackBar.dismiss();
        },
      },
    })
  }

  validateCode() {
    const { username, code } = this.form.value;
    this._authServiceService
      .activateAccount(code, username)
      .subscribe({next:(e) => {this.showSnack('Cuenta activada correctamente')
    this.router.navigate(['./login'])},error:(err)=>{
        this.showSnackError('ocurrió un error al activar su cuenta retiento nuevamente y compruebe el código que recibió')
    },});
  }
  changePassword() {
    const { username, code, password } = this.form.value;
    this._authServiceService
      .changePassword(code, username, password)
      .subscribe({next:(e) => {this.showSnack('Actualizar contraseña')
      this.router.navigate(['./login'])},error:(error)=>{
        this.showSnackError('ocurrió un error al activar su cuenta retiento nuevamente y compruebe el código que recibió')
      }});
  }
  generateCode() {
    const { username } = this.form.value;
    this._authServiceService
      .generateCode(username)
      .subscribe({next:(e) => this.showSnack('Código generado enviado a su email'),error:(error)=>{
        this.showSnackError('ocurrió un error al activar su cuenta retiento nuevamente y compruebe el código que recibió')
      }});
  }
}
