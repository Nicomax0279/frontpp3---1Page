import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription, from } from 'rxjs';
import { career } from 'src/app/interfaces/career';
import { user } from 'src/app/interfaces/user';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent {
  form!:FormGroup;
  sus?:Subscription;
  constructor(@Inject(MAT_DIALOG_DATA) public user: user ,private fb:FormBuilder , private matDialogRef:MatDialogRef<UpdateDialogComponent> , private _careerService:CareerService)
   {  this.form = this.fb.group({
    names: [user.names , Validators.required ],
    surnames: [user.surnames , Validators.required ],
    birthdate :  [user.birthdate , Validators.required ],
    career :[user.career , Validators.required ]
  })  }
  userModel = this.user;
  careers!:career[]
  ngOnInit(){
    this.sus = this._careerService.getCareers().subscribe(c=>this.careers=c)

  }

  update(){
    this.matDialogRef.close(this.form.value);
  }

  closeDialog(){
    this.matDialogRef.close(undefined);
  }

  ngOnDestroy(){
    if(this.sus){
      this.sus.unsubscribe()
    }
    
  }
}
