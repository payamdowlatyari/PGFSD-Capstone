import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { Transaction } from 'src/app/models/transaction';
import { AccountService } from 'src/app/services/account.service';
import { DataService } from 'src/app/services/data.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  toAccountNumber: string = '';
  accountNumber: string = '';
  amount: number = 0;
  message: string = '';
  account: Account | undefined;
  balance: number = 0;

  constructor(
    private dataService: DataService,
    private accountService: AccountService,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.accountService.getAccountByNumber(this.dataService.getUser().id)
      .subscribe(
        account => {
          this.account = account;
          this.accountNumber = this.account.accountNumber;
          this.balance = this.account.balance;
        },
        error => console.log(error)
      )
  }

  transferMoney() {
    if (this.toAccountNumber === '' ||
      this.accountNumber === '' ||
      this.message === '') {
      alert('Please enter all the details!');
      return;
    }

    if (this.account && !(this.accountNumber = this.account.accountNumber)) {
      alert('Account number is wrong!');
      return;
    }

    if (this.account && this.account?.balance < this.amount) {
      alert(`You only have USD ${this.account.balance} in your account\nYou need USD ${Math.round(this.amount - this.account.balance)} more to transfer`);
      return;
    }

    let transaction = {
      sender: this.accountNumber,
      receiver: this.toAccountNumber,
      amount: this.amount,
      message: this.message
    } as Transaction;

    this.transactionService.postTransaction(transaction)
    .subscribe(
      (      message: { message: any; }) => {
        alert(message.message);
      },
      (      error: any) => console.log(error),
      () => {
        this.toAccountNumber = '';
        this.accountNumber = '';
        this.amount = 0;
        this.message = '';
      }
    )
  }

}
