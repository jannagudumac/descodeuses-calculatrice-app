import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorgridComponent } from './calculatorgrid/calculatorgrid.component';

export const routes: Routes = [
    {path: 'calculator', component: CalculatorComponent, title: "Calculator"},
    {path: '', component: CalculatorgridComponent, title: "Calculator grid"}
];
