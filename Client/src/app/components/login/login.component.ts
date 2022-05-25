import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  username: string = '';
  password: string = '';

	constructor (private loginService: LoginService) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }
  
  onSubmit() {
  	this.loginService.sendCredential(this.username, this.password).subscribe(
      _res => {
        this.loggedIn=true;
        localStorage.setItem('PortalAdminHasLoggedIn', 'true');
        location.reload();
      },
      err => console.log(err)
    );
  }

  ngOnInit() {}

  // form!: FormGroup;
  // isLoading = false;
  // private authStatusSub!: Subscription;


  // constructor(public authService: AuthService) { }

  // ngOnInit(): void {
  //   this.form = new FormGroup({
  //     username: new FormControl(null, [Validators.required]),
  //     password: new FormControl(null, [Validators.required])
  //   });
  //   this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
  //     authStatus => {
  //       this.isLoading = false;
  //     }
  //   );
  // }

  // onLogin() {
  //   if(this.form.invalid) {
  //     return;
  //   }
  //   this.isLoading = true;
  //   this.authService.login(this.form.value.username, this.form.value.password);
  // }

  // ngOnDestroy(): void {
  //   this.authStatusSub.unsubscribe();
  // }

}
