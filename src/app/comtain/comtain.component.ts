import { Component } from '@angular/core';

@Component({
  selector: 'app-comtain',
  templateUrl: './comtain.component.html',
  styleUrls: ['./comtain.component.css']
})
export class ComtainComponent {

  name="Alaa";
  product=[
    "item1","item2","item3","item4"
  ];
  days= new Date().getDay();
}
