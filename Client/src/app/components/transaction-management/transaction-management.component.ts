import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.css']
})
export class TransactionManagementComponent implements OnInit {

  transactions: Array<Transaction> = [];

  constructor(
    private transactionService: TransactionService,
  ) { }

  ngOnInit(): void {
    this.transactionService.getAllTransactions()
      .subscribe(
        transaction => {
          console.log(transaction);
          this.transactions = transaction;
        },
        error => console.log(error)
      )
  }

  generateDate(date: Date): string {
    return `${date}`.slice(0, 10);
  }

  approve(id: string) {
    this.transactionService.permitTransaction(id.toString())
      .subscribe(
        message => {
          this.transactionService.getAllTransactions()
            .subscribe(
              transaction => {
                alert(message.message);
                this.transactions = transaction;
              },
              error => console.log(error)
            )
        },
        error => console.log(error)
      )
  }

}
