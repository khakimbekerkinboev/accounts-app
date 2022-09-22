import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  numOfAllTransactions: number = 0;
  numOfIncome: number = 0;
  numOfOutcome: number = 0;
  numOfLoans: number = 0;
  numOfInvestments: number = 0;

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    this.getData.getJSON().subscribe((data: any) => {
      this.numOfAllTransactions = data.total;

      this.numOfIncome = data.data.filter(
        (transaction: any) => transaction.type == 'income'
      ).length;

      this.numOfOutcome = data.data.filter(
        (transaction: any) => transaction.type == 'outcome'
      ).length;

      this.numOfLoans = data.data.filter(
        (transaction: any) => transaction.type == 'loan'
      ).length;

      this.numOfInvestments = data.data.filter(
        (transaction: any) => transaction.type == 'investment'
      ).length;
    });
  }
}
