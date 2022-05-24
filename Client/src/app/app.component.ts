import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from './models/account';
import { User } from './models/user';
import { AccountService } from './services/account.service';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

    public accounts : Account[] | undefined;
    constructor(private accountService: AccountService, ngbConfig: NgbConfig){
      ngbConfig.animation = false;
    }

  ngOnInit() {
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
