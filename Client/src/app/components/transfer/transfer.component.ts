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
  // toAccountType: string = '';
  // accountType: string = '';
  // isChecked: boolean = false;
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

  // changed(event: { target: { checked: any; }; }) {
  //   if (event.target.checked && this.account) {
  //     this.isChecked = true;
  //     this.toAccountNumber = this.account.accountNumber;
  //   } else {
  //     this.isChecked = false;
  //     this.toAccountNumber = '';
  //   }
  // }

  transferMoney() {
    if (this.toAccountNumber === '' ||
      this.accountNumber === '' ||
      this.message === '') {
      alert('Please enter all the details!');
      return;
    }

    // if (!(this.accountType === 'Savings' || this.accountType === 'Primary')) {
    //   alert('Wrong Self Account Type! Please type either Savings or Primary only!');
    //   return;
    // }

    // if (!(this.toAccountType === 'Savings' || this.toAccountType === 'Primary')) {
    //   alert('Wrong Transfer Account Type! Please type either Savings or Primary only!');
    //   return;
    // }

    if (this.account && !(this.accountNumber = this.account.accountNumber)) {
      alert('Account number is wrong!');
      return;
    }

    // if (this.isChecked) {
    //   if (this.accountType === this.toAccountType) {
    //     alert('Illegal transaction!');
    //     return;
    //   }
    // }

    if (this.account && this.account?.balance < this.amount) {
      alert(`You only have USD ${this.account.balance} in your account\nYou need USD ${Math.round(this.amount - this.account.balance)} more to transfer`);
      return;
    }

    // if (this.accountType === 'Savings' && this.account.accountBalanceSavings < this.amount) {
    //   alert(`You only have Rs. ${this.account.accountBalanceSavings} in your savings account\nYou need Rs. ${Math.round(this.amount - this.account.accountBalanceSavings)} more to transfer!`);
    //   return;
    // }

    let transaction = {
      sender: this.accountNumber,
      receiver: this.toAccountNumber,
      // action: this.accountType,
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
        // this.toAccountType = '';
        this.accountNumber = '';
        // this.accountType = '';
        this.amount = 0;
        // this.isChecked = false;
        this.message = '';
      }
    )
  }

  // selectSelfPrimary(event: { target: { checked: any; }; }) {
  //   if(event.target.checked) {
  //     this.accountType = 'Primary';
  //   } else {
  //     this.accountType = 'Savings';
  //   }
  // }

  // selectSelfSavings(event: { target: { checked: any; }; }) {
  //   if(event.target.checked) {
  //     this.accountType = 'Savings';
  //   } else {
  //     this.accountType = 'Primary';
  //   }
  // }

}
