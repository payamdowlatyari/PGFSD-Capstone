import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Check } from 'src/app/models/check';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  // check: Check;
  user: User | undefined;
  id: number = 0;
  pages: string = '';
  accountNumber: string = '';
  status: number = 0; 
  accountType: string = "Checking";

  checkBooks: Array<Check> | undefined;
  toShowChecks: Array<Check> | undefined;
  allowBack: boolean = false;
  allowNext: boolean = false;
  current: number = 0;

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.userService.getUser(this.dataService.getUser().id)
      .subscribe(
        user => {

          if (this.checkBooks != undefined && this.checkBooks.length > 5) {
            this.allowNext = true;
            this.toShowChecks = this.checkBooks.slice(this.current, this.current + 5);
          }
          this.accountNumber = user.id;
          this.checkBooks = this.checkBooks;
          this.current = 0;
        },
        error => console.log(error)
      )
  }

  onPrev() {
    if (this.checkBooks != undefined){
    this.allowNext = true;
    this.current = this.current - 5;
    this.toShowChecks = this.checkBooks.slice(this.current, this.current + 5);
    if (this.current - 5 < 0) {
      this.allowBack = false;
    } else {
      this.allowBack = true;
    }
  }
  }

  onNext() {
    if (this.checkBooks != undefined){
    this.allowBack = true;
    this.current = this.current + 5;
    this.toShowChecks = this.checkBooks.slice(this.current, this.current + 5);
    if (this.current + 5 >= this.checkBooks.length) {
      this.allowNext = false;
    } else {
      this.allowNext = true;
    }
  }
  }

  // let check = {
  //   id: this.id,
  //   accountNumber: this.accountNumber,
  //   pages: this.pages,
  //   status: this.status,
  //   accountType: this.accountType
  // }  as Check;

  generateDate(date: Date): string {
    let myDate = `${date}`.slice(0, 10);
    return myDate;
  }

  generateStatus(code: number): string {
    if (code === 1) {
      return 'Success';
    }
    return 'Pending';
  }

  // requestCheckBooks() {
  //   this.userService.requestChequeBook(this.dataService.getUser().id, 'Primary')
  //     .subscribe(
  //       message => {
  //         alert(message.message);
  //         this.userService.getCheckBooks(this.dataService.getUser().id)
  //           .subscribe(
  //             chequeBooks => {
  //               if (chequeBooks.length > 5) {
  //                 this.allowNext = true;
  //               }
  //               this.chequeBooks = chequeBooks;
  //               this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
  //             },
  //             error => console.log(error)
  //           )
  //       },
  //       error => console.log(error)
  //     )
  // }

  requestCheckBook() {
    this.userService.requestCheckBook(this.dataService.getUser().id, this.pages)
      .subscribe(
        message => {
          alert(message);
          this.userService.requestCheckBooks(this.dataService.getUser().id)
            .subscribe(
              check => {
                if (check.length > 5) {
                  this.allowNext = true;
                }
              
                this.checkBooks = check;
                this.toShowChecks = this.checkBooks.slice(this.current, this.current + 5);
            
              },
              error => console.log(error)
            )
        },
        error => console.log(error)
      )
  }
  // requestCheckavings() {
  //   this.userService.requestChequeBook(this.dataService.getUser().accountNumber, 'Savings')
  //     .subscribe(
  //       message => {
  //         alert(message.message);
  //         this.userService.getCheck(this.dataService.getUser().accountNumber)
  //           .subscribe(
  //             check => {
  //               if (check.length > 5) {
  //                 this.allowNext = true;
  //               }
  //               this.check = check;
  //               this.toShowCheck = this.check.slice(this.current, this.current + 5);
  //             },
  //             error => console.log(error)
  //           )
  //       },
  //       error => console.log(error)
  //     )
  // }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
      if (result === 'Checking') {
        this.requestCheckBook();
      } 
    }, (reason) => {
    });
  }

}


