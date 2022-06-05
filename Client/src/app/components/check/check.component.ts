import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Check } from 'src/app/models/check';
import { AccountService } from 'src/app/services/account.service';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  pages: string = '50';
  accountType: string = "Checking";
  checkBooks: Array<Check> = [];

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private accountService: AccountService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.accountService.requestCheckBooks(this.dataService.getUser().id)
      .subscribe(
        check => {     
          this.checkBooks = check;
          console.log(check)
        },
        error => console.log(error)
      )
  }

  generateDate(date: Date): string {
    return `${date}`.slice(0, 10);
  }

  generateStatus(code: number): string {
    if (code === 1) {
      return 'Success';
    }
    return 'Pending';
  }

  requestCheckBook() {
    this.userService.requestCheckBook(this.dataService.getUser().id, this.pages)
      .subscribe(
        message => {
          alert(message);
          this.accountService.requestCheckBooks(this.dataService.getUser().id)
            .subscribe(
              check => {
                this.checkBooks = check;            
              },
              error => console.log(error)
            )
        },
        error => console.log(error)
      )
  }

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


