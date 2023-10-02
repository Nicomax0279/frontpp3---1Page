import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
export interface SnackConf{
  type:'successful'|'error' ;
  useImage:boolean;
  iconType:'img'|'icon';
  iconValue:string
}
@Component({
  selector: 'app-snack2',
  templateUrl: './snack2.component.html',
  styleUrls: ['./snack2.component.css']
})

export class Snack2Component implements OnInit {


  message:string = 'exitoso'
  config:SnackConf =  {
    iconType:'icon',
    iconValue:'stop',
    type:'successful',
    useImage:true
  }
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data.message
    this.config = data.config
    console.log(this.config.type)
    console.log(data,this.config,this.message);
  }
  close(){
    this.data.preClose()

  }
  ngOnInit() {
  }

}
