import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loggedIn: boolean;
  // username: string = '';
  // password: string = '';
  // form: FormGroup | undefined;
  // authStatusSub: Subscription | undefined;
  // isLoading: boolean | undefined;
  // userId: number | undefined;

  // constructor (private loginService: LoginService) {
  //   if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
  //     this.loggedIn = false;
  //   } else {
  //     this.loggedIn = true;
  //   }
  // }
  
  // onSubmit() {
  // 	this.loginService.sendCredential(this.username, this.password).subscribe(
  //     res => {
  //       this.loggedIn=true;
  //       localStorage.setItem('PortalAdminHasLoggedIn', 'true');
  //       location.reload();
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

  ngOnInit() {}
}