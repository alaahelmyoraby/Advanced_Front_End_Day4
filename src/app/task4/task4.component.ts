import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {

////////////////Task 5//////////////
cutomers:any[]=[
  {Name:"ALAA",UserName:"ORABY",Phone:324}
  ]
  newcustomname:string="";
  newcustomuser:string="";
  newcustomphone:string="";

  addcustomer(){
  this.cutomers.push({
    Name:this.newcustomname,
    User:this.newcustomuser,
    Phone:this.newcustomphone
  });
    this.newcustomname="";
    this.newcustomuser="";
    this.newcustomphone="";

  }
list="People List";
people=[
["Alaa","alaa","0114546554757557"],
["Aya","aya","0114546554757557"],
["Walaa","walaa","0114546554757557"],
];
//////////////secon method/////////////////
name:string[]=["helmy","helmy","oraby"];
username:Array<string>=["helmy","helmy","oraby"];
phone:Array<string>=["helmy","helmy","oraby"];



}
