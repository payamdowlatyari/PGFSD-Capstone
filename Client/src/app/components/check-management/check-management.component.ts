import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Check } from 'src/app/models/check';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-check-management',
  templateUrl: './check-management.component.html',
  styleUrls: ['./check-management.component.css']
})
export class CheckManagementComponent implements OnInit {

  checkBooks: Array<Check> = [];
  id: string = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getCheckBookRequests()
      .subscribe(
        checkBooks => {
          this.checkBooks = checkBooks;
        },
        error => console.log(error)
      )
  }

  generateDate(date: Date): string {
    return `${date}`.slice(0, 10);
  }

  accept(checkBookNumber: string) {
    this.userService.acceptCheckBookRequest(checkBookNumber)
      .subscribe(
        message => {
          this.userService.getCheckBookRequests()
            .subscribe(
              checkBooks => {
                alert(message.message);
                this.checkBooks = checkBooks;
              },
              error => console.log(error)
            )
        },
        error => console.log(error)
      )
  }
}
