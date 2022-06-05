import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor (private userService: UserService , private dataService: DataService, private router: Router) {}
  
  loginUser() {
    if(this.username =='' || this.password == '') {
      alert('Please enter login credentials!');
      return;
    }
    console.log(this.username + ' ' + this.password)
    this.userService
    .checkUserByCredentials(this.username, this.password)
    .subscribe(
      message => {
        if(message.message == 'success') {
          console.log(message.message)
          this.userService.getUser(this.username).subscribe(
            user => {
              this.dataService.setUser(user);
              this.dataService.setIsSafe(true);
              this.router.navigate(['home/dashboard']);
            }
          )
        } else if (message.message === 'no-user') {
          alert('Username is not registered!');
          return;
        } 
      },
      error => console.log(error),
      () => {
        this.username = '';
        this.password = '';
      }
    )
  }

  ngOnInit() {}
}