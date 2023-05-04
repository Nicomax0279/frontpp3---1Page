import { Component } from '@angular/core';
import { offer } from 'src/app/interfaces/offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  offers:offer[] = [
    {title:"vas", company:"ink. sa",description:"dasd" , updateDate:"28/3/2023" , career: "enfermeria"},
    {title:"vas",company: "my",description:"dasdsadsd", updateDate:"28/3/2023" , career: "cardiologia"},
    {title:"vas", company:"ink. sa",description:"dasd" , updateDate:"28/3/2023" , career: "enfermeria"},
    {title:"vas",company: "my",description:"dasdsadsd", updateDate:"28/3/2023" , career: "cardiologia"},
    {title:"vas", company:"ink. sa",description:"dasd" , updateDate:"28/3/2023" , career: "enfermeria"},
    {title:"vas",company: "my",description:"dasdsadsd", updateDate:"28/3/2023" , career: "cardiologia"},
    {title:"vas", company:"ink. sa",description:"dasd" , updateDate:"28/3/2023" , career: "enfermeria"},
    {title:"vas",company: "my",description:"dasdsadsd", updateDate:"28/3/2023" , career: "cardiologia"}
  ]
}
