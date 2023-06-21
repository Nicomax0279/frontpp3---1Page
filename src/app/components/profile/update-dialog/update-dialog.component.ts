import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public user: user , private matDialogRef:MatDialogRef<UpdateDialogComponent>) { }
  userModel = this.user;
  careers:string[] = [
    'Analista de sistemas' , 'Emfermeria', 'Radiologia','Seguridad y Higiene', "Administracion de empresas"
  ]


  update(){
    
    this.matDialogRef.close(this.userModel);

  }

  ngOnDestroy(){
    this.matDialogRef.close()
  }
}
