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

  transaction: Array<Transaction> = [];
  toShowTransaction: Array<Transaction> = [];

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.transactionService.getAllTransactions()
      .subscribe(
        transaction => {
          this.transaction = transaction;
        },
        error => console.log(error)
      )
  }

  generateDate(date: Date): string {
    return `${date}`.slice(0, 10);
  }

  allow(id: number) {
    this.transactionService.permitTransaction(id.toString())
      .subscribe(
        message => {
          this.transactionService.getAllTransactions()
            .subscribe(
              transaction => {
                alert(message.message);
                this.transaction = transaction;
              },
              error => console.log(error)
            )
        },
        error => console.log(error)
      )
  }

}
