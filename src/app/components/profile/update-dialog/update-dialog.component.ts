import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { from } from 'rxjs';
import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent {
  form!:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public user: user ,private fb:FormBuilder , private matDialogRef:MatDialogRef<UpdateDialogComponent>)
   {  this.form = this.fb.group({
    names: [user.names , Validators.required ],
    surnames: [user.surnames , Validators.required ],
    birthdate :  [user.birthdate , Validators.required ],
    career :[user.career , Validators.required ]
  })  }
  userModel = this.user;
  careers:string[] = [
    'Analista de sistemas' , 'Emfermeria', 'Radiologia','Seguridad y Higiene', "Administracion de empresas"
  ]


  update(){
    this.matDialogRef.close(this.form.value);
  }

  closeDialog(){
    this.matDialogRef.close(undefined);
  }

}
