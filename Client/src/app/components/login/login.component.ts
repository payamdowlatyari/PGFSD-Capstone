import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loggedIn: boolean;
  // dashboard: boolean;
  username: string = '';
  password: string = '';
  loginCount: number = 3;
  // form: FormGroup | undefined;
  // // authStatusSub: Subscription | undefined;
  // isLoading: boolean | undefined;
  // userId: number | undefined;

  constructor (private userService: UserService , private dataService: DataService, private router: Router) {
  //   if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
  //       this.dashboard = false;
  //   } else {
  //       this.dashboard = true;
  //    }  
  
  //   if(localStorage.getItem('PortalUserHasLoggedIn') == '' || localStorage.getItem('PortalUserHasLoggedIn') == null ) {
  //       this.loggedIn = false;
  //   } 
  //     else {
  //       this.loggedIn = true;
  //   } 
  }
  
  // onSubmit() {
  // 	this.loginService.sendCredential(this.username, this.password).subscribe(
  //     res => {
  //       location.reload();
  //       localStorage.setItem('PortalUserHasLoggedIn', 'true');
  //       // this.dataService.setUser(user);
  //       this.loggedIn=true;
  //     },
  //     err => console.log(err)
  //   );
  // }

  // getDisplay() {
  //   if(!this.loggedIn){
  //     return "none";
  //   } else {
  //     return "";
  //   }
  // }


  // logout(){
  //   this.loginService.logout().subscribe(
  //     res => {
  //              this.router.navigate(['/']);     
  //     },
  //     err => console.log(err)
  //     );
  //     location.reload();
  //    localStorage.setItem('PortalUserHasLoggedIn', '');
  //   this.loggedIn=false;
  // }

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
        // } else if(message.message === 'failure') {
        //   alert(`Your account was blocked in attempt for multiple wrong logins.\nPlease contact your nearest ICIN bank!`);
        //   return;
        } else if (message.message === 'no-user') {
          alert('Username is not registered yet!');
          return;
        } 
        // else {
          // if(this.loginCount === 1) {
            // this.userService.blockUser(this.username)
            // .subscribe(
            //   message => alert(message.message),
            //   error => console.log(error)
            // )
            // return;
          // }
          // this.currentLoginCount--;
          // alert(`${message.message}\nYou have ${this.currentLoginCount} attempts left!`);
        // }
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