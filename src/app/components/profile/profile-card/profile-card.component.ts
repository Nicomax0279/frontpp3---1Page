import { Component, EventEmitter, Input , Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { user } from 'src/app/interfaces/user';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() user ?: user
  @Input() myProfile:boolean = false;
  @Output() updateUserEvent = new EventEmitter<user>();
  img:string = ''
  constructor(
    private matDialog:MatDialog
  ){

  }
  ngOnChanges(){
    if(this.user){
      // this.img = `https://ui-avatars.com/api/?name=${this.user?.names}+${this.user?.surnames}&background=0D8ABC&color=fff&size=128`
      this.img = `https://ui-avatars.com/api/?name=${this.user?.names}+${this.user?.surnames}&background=random&color=fff&size=128`
    }


  }
  updateUser(){
    let dialog  = this.matDialog.open(UpdateDialogComponent,{
      data : this.user,
      width : "100%",
      height: "100%",
      maxHeight: '500px',
      maxWidth: '500px',
      backdropClass: '.color',
      position:{},

    })

    dialog.afterClosed().subscribe(res => {
      if(res)this.updateUserEvent.emit(res)
    })
  }
}
