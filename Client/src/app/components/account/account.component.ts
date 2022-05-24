import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public accounts : Account[] | undefined;
    constructor(private accountService: AccountService){}

  ngOnInit() : void{
    this.getAccounts();
  }

    public getAccounts(): void {
      this.accountService.getAccounts().subscribe(
        (response: Account[]) => {
          this.accounts = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      ); 
    }

}
