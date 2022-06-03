import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Check } from 'src/app/models/check';
import { AdminService } from 'src/app/services/admin.service';
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
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getCheckBookRequests()
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
    this.adminService.acceptCheckBookRequest(checkBookNumber)
      .subscribe(
        message => {
          this.adminService.getCheckBookRequests()
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
