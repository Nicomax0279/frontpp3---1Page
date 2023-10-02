import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Snack2Component } from 'src/app/components/snack2/snack2.component';
import { loginCompany } from 'src/app/interfaces/loginCompany';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-company-login-component',
  templateUrl: './company-login-component.component.html',
  styleUrls: ['./company-login-component.component.css'],
})
export class CompanyLoginComponentComponent {
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
      user: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }
  sus!: Subscription;
  login() {
    const loginCompany: loginCompany = {
      username: this.form.value.user,
      password: this.form.value.password,
    };

    this.sus = this._authService.loginCompany(loginCompany).subscribe({
      next: (res) => {
        if (res.token) {
          this._LocalStorageServiceService.setToken(res.token);
          this._LocalStorageServiceService.setUsername(loginCompany.username);

          this.router.navigate(['company']);
        } else {
          this._snackBar.openFromComponent(Snack2Component, {
            duration: 5000,
            data: {
              message: 'A ocurrido un error',
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
      },
      error: (err: HttpErrorResponse) => {
        if (err.error == 'Error: email not registered') {
          this._snackBar.openFromComponent(Snack2Component, {
            duration: 5000,

            data: {
              message: 'este nombre de usuario no esta registrado',
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
      },
    });
  }

  ngOnDestroy() {
    if (this.sus) {
      this.sus.unsubscribe();
    }
  }
}
