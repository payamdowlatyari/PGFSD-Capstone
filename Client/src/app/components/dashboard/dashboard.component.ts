import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.username = this.dataService.getUser().firstname;
  }

  // userList: Object[] | undefined;

  // constructor(private userService: UserService, private router: Router) {
  //   this.getUsers();
  // }

  // getUsers(){
  //   this.userService.getUsers().subscribe(
  //     (      res: any) => {
  //       this.userList =JSON.parse(JSON.parse(JSON.stringify(res))._body);
  //     },
  //     (      err: any) => console.log(err)
  //   )
  // }

  // onSelectPrimary(username: string){
  //   this.router.navigate(['/primaryTransaction',username]);
  // }

  // onSelectSavings(username: string){
  //   this.router.navigate(['/savingsTransaction',username]);
  // }

  // enableUser(username: string){
  //   this.userService.enableUser(username).subscribe();
  //   location.reload();
  // }

  // disableUser(username: string){
  //   this.userService.disableUser(username).subscribe();
  //   location.reload();
  // }

  // ngOnInit() {
  // }


}
