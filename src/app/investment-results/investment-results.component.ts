import {Component, Input} from '@angular/core';
import {InvestmentResult} from "../investmentg-result.model";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: InvestmentResult[];//input because we will get it from the parent
}
