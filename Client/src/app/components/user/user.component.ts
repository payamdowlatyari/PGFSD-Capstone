import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[] | undefined;
  user : User | undefined;
  username: string = '';
  constructor(private userService: UserService , private dataService: DataService){}

ngOnInit(): void {

  this.user = this.dataService.getUser();
  this.username = this.user.username;

}

public getUsers(): void {
  this.userService.getUsers().subscribe(
    (response: User[]) => {
      this.users = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  ); 
}

public getUserByUsername(){
  this.userService.getUser(this.username).subscribe(
    (response: any) => {
      this.user = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}


}


