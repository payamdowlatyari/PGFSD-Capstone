import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './services/login.service';
// import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'client';
  loggedIn: boolean;
  username: string = '';
  password: string = '';

  constructor (private loginService: LoginService, private router : Router) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null ) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }
  
  onSubmit() {
  	this.loginService.sendCredential(this.username, this.password).subscribe(
      res => {
      },
      err => console.log(err)
    );
    localStorage.setItem('PortalAdminHasLoggedIn', 'true');
    this.loggedIn=true;
    location.reload();
  }

  logout(){
    this.loginService.logout().subscribe(
      res => {
               this.router.navigate(['/']);
              
      },
      err => console.log(err)
      );
      location.reload();
    localStorage.setItem('PortalAdminHasLoggedIn', '');
    this.loggedIn=false;
   
  }

  getDisplay() {
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  ngOnInit() {}
}
