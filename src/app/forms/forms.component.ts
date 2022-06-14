import { Component, OnInit } from '@angular/core';
import { AutonomyCompute } from '../AutonomyCompute';


import { PuissanceDbm } from "../../app/enum";
import { EnumTypesTag } from "../../app/enum";
import { EnumTagFormat } from "../../app/enum";
import { DTM } from "../../app/enum";
import { SensibilityPir } from "../../app/enum";
interface CategoryInterface {
  id: string;
  name: string;
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})



// https://angular.io/guide/forms
export class FormsComponent  {
  
   categories: CategoryInterface[] = [
    {
      id: "1",
      name: "T"
    },
    {
      id: "2",
      name: "Rht"
    },
    {
      id: "3",
      name: "Move"
    }
  ];
   selectedCategoryArray : CategoryInterface = this.categories[0];
  model = new AutonomyCompute("4.0.0",true,"name tempalte",1,PuissanceDbm.negativeFourty,EnumTypesTag.T,EnumTagFormat.Puck,true,10,10,30,0,0,0,0,10,10,DTM.dtmLevel0,1000,0,SensibilityPir.sensiPirLevel0,288,0,34650,1000,10,10);

  submitted = false;

  onSubmit() { this.submitted = true; }



  

}
