import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calculatorgrid',
  imports: [MatButtonModule],
  templateUrl: './calculatorgrid.component.html',
  styleUrl: './calculatorgrid.component.css'
})
export class CalculatorgridComponent {

  result!: number;
  listOperators = [
    { text: "/", value: "/" },
    { text: "*", value: "*" },
    { text: "-", value: "-" },
    { text: "+", value: "+" },
  ];

  listNumbers = [
    { text: "7", value: "7" },
    { text: "8", value: "8" },
    { text: "9", value: "9" },
    { text: "4", value: "4" },
    { text: "5", value: "5" },
    { text: "6", value: "6" },
    { text: "1", value: "1" },
    { text: "2", value: "2" },
    { text: "3", value: "3" },
    { text: "0", value: "0" },
  ];

  /*listOperators=["+", "-"]....
  listNumbers = [1, 2, 3, 4 ....]*/

  addNumber(){
    
  }
  addOperator(){

  }
  onSubmit(){

  }
}
