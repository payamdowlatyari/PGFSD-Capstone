import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  id : string = '';
  accountNumber: string = '';
    accountType: string = '';
    balance: number = 0;
  
    constructor(private dataService: DataService, private accountService: AccountService) { }

  // ngOnInit() : void{
  //   this.getAccounts();
  // }

    public ngOnInit(): void {
      
      this.accountService.getAccountByNumber(this.dataService.getUser().id)
      .subscribe(
        account => {
          console.log(this.accountNumber + ' ' + this.accountType)
          this.accountNumber = account.accountNumber;
          this.accountType = account.accountType;
          this.balance = account.balance;
        },
        error => console.log(error)
      ); 
    }

   
  
    // ngOnInit(): void {
    //   this.accountService.getAccountByNumber(this.dataService.getUser().accountNumber)
    //   .subscribe(
    //     account => {
    //       this.accountNumber = account.accountNumber;
    //       this.accountHolderName = account.accountHolderName;
    //       this.accountCIFNumber = account.accountCIFNumber;
    //       this.accountBranch = account.accountBranch;
    //       this.accountBalancePrimary = account.accountBalancePrimary;
    //       this.accountBalanceSavings = account.accountBalanceSavings;
    //     },
    //     error => console.log(error)
    //   )
    // }

}
