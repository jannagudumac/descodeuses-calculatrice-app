import { NgClass } from '@angular/common';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  listOperators = [
    { text: "+", value: "+" },
    { text: "-", value: "-" },
    { text: "/", value: "/" },
    { text: "*", value: "*" },
  ];
  formGroup!: FormGroup;
  result!: number;
  resultText!: string;
  color: string = 'black';

  constructor(
    private fb: FormBuilder) {
    this.formGroup = this.fb.group(
      {
        number1: ['', [Validators.required]],
        operator: ['+', [Validators.required]],
        number2: ['', [Validators.required]],
      }
    );
  }


  init() {
    this.formGroup.setValue(
      {
        number1: 1,
        operator: '*',
        number2: 2,
      }
    )
  }

  onSubmit() {
    const number1 = this.formGroup.value.number1;
    const number2 = this.formGroup.value.number2;
    const operator = this.formGroup.value.operator;

    if (!this.formGroup.valid) {
      alert("Please fill all fields correctly.");
      return;
    }
    if (number2 === 0 && operator === '/') {
      alert("Division by zero is not allowed.");
      return;
    }

    if (this.formGroup.valid) {

      if (operator === "+") {
        this.result = number1 + number2
      }

      else if (operator === "-") {
        this.result = number1 - number2
      }
      else if (operator === "/") {
        this.result = number1 / number2
      }
      else {
        this.result = number1 * number2
      }






      this.resultText = "Result:" + this.result;
      this.colorChange();
    }
  }
    colorChange() {
    if (this.result < 0) {
      this.color = 'red';
    } else if (this.result > 0) {
      this.color = 'green';
    }
  }

}



