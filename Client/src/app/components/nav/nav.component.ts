import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn: boolean;

	constructor(private loginService: LoginService, private router : Router, ngbConfig: NgbConfig) {
		if(localStorage.getItem('PortalAdminHasLoggedIn') == '') {
			this.loggedIn = false;
		} else {
			this.loggedIn = true;
		}
	}

	logout(){
		this.loginService.logout().subscribe(
			res => {
				localStorage.setItem('PortalAdminHasLoggedIn', '');
			},
			err => console.log(err)
			);
		location.reload();
		this.router.navigate(['/login']);
	}

	getDisplay() {
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  ngOnInit(): void {
  }

}
