import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  dashboard: boolean;
  username: string = '';
  password: string = '';
  form: FormGroup | undefined;
  authStatusSub: Subscription | undefined;
  isLoading: boolean | undefined;
  userId: number | undefined;

  constructor (private loginService: LoginService , private router: Router) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.dashboard = false;
    } else {
      this.dashboard = true;
    }
  }
  
  onSubmit() {
  	this.loginService.sendAdminCredential(this.username, this.password).subscribe(
      res => {
        this.dashboard=true;
        localStorage.setItem('PortalAdminHasLoggedIn', 'true');
        location.reload();
      },
      err => console.log(err)
    );
  }

  getDashboard() {
    if(!this.dashboard){
      return "none";
    } else {
      return "";
    }
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
    this.dashboard=false;
  }

  ngOnInit() {}

}
