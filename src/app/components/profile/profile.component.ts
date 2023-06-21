import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Subscription} from 'rxjs'
import { user } from 'src/app/interfaces/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user!:user
 sus?:Subscription
  constructor(
  private _userService:UserService
 ){}
 ngOnInit(){
  this.sus = this._userService.getUserMyUser().subscribe({
    next: (e)=> this.user = e,
    error: (error)=>console.log(error)  
  })
 
 }
 updateUser(userToUpdate:user){
  
  this._userService.putMyUser(userToUpdate).subscribe({next:(res)=>{
    console.log(res)},error(err) {console.log(err)}})
 }

 ngOnDestroy(){
  if(this.sus){this.sus.unsubscribe()}
 }
}
