import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Transaction } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Array<Transaction> = [];
  // displayTransactions: Array<Transaction> = [];
  amountColor: string = '';
  startDate!: Date;
  endDate!: Date;

  constructor(
    private dataService: DataService,
    private transactionsService: TransactionService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.transactionsService.getTransactions(this.dataService.getUser().id)
      .subscribe(
        transactions => {
          this.transactions = transactions;
        },
        error => console.log(error)
      )
  }


  generateDate(date: string): string {
    return `${date}`.slice(0, 10);
  }

  generateStatus(code: number): string {
    if (code === 1) {
      return 'Success';
    }
    return 'Pending';
  }

  checkSelf(accountNumber: string): string {
    if (this.dataService.getUser().id == accountNumber) {
      return 'Self'
    }
    return accountNumber;
  }

  generateTransferAmount(amount: number, from: string, to: string): string {
    let type = this.generateType(from, to);
    if (type === 'Debit') {
      return `${amount} (Dr)`;
    } else if (type === 'Credit') {
      return `${amount} (Cr)`;
    }
    return `${amount}`;
  }

  generateType(from: string, to: string): string {
    let curr_acc = this.dataService.getUser().id;
    if (to === curr_acc && from === curr_acc) {
      return '-';
    }
    if (to === curr_acc) {
      return 'Credit';
    }
    return 'Debit';
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
      if (result === 'Filter') {
        if (!(this.startDate || this.endDate )) {
          this.transactionsService
            .getFilteredTransactions(
              this.dataService.getUser().id,
              this.startDate,
              this.endDate
            ).subscribe(
              (              transactions: any[]) => {
                this.transactions = transactions;
              },
              (              error: any) => console.log(error)
            )
        }
      } else {
        this.startDate = new Date;
        this.endDate = new Date;
        this.transactionsService.getTransactions(this.dataService.getUser().id)
          .subscribe(
            transactions => {
              this.transactions = transactions;
            },
            error => console.log(error)
          )
      }

    }, (reason) => {
    });
  }

}
