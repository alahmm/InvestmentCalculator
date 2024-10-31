import {Component, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInput} from "../investment-input.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>()//output because we will give it to the parent
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  //the value gotten from an input will be alwayse a string

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('10');
    this.enteredExpectedReturn.set('5');
  }
}
