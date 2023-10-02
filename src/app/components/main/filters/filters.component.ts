
import { career } from 'src/app/interfaces/career';
import { Component, EventEmitter, Output } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filters } from 'src/app/interfaces/body';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
careers!:career[]
form!:FormGroup
sus?:Subscription
modalities:string[]= ['presencial','hibrido',"remoto"]
display:boolean = false
@Output() updateFilterEvent = new EventEmitter<filters>();
constructor(private _careerService:CareerService, private fb:FormBuilder){
  this.form = this.fb.group({
    companyName: [""],
    career :[""],
    modality:[""],
    title:[""],
  })
}
ngOnInit(){
  this.sus = this._careerService.getCareers().subscribe(c=>this.careers=c)

}
filter(){
 this.updateFilterEvent.emit(this.form.value)
}

ngOnDestroy(){
  if(this.sus){
    this.sus.unsubscribe()
  }
}
}
