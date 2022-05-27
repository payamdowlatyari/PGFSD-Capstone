import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

// loggedIn: boolean;

// constructor(private loginService: LoginService, private router : Router) {
// 	if(localStorage.getItem('PortalAdminHasLoggedIn') == '') {
// 		this.loggedIn = false;
// 	} else {
// 		this.loggedIn = true;
// 	}
// }



// getDisplay() {
// if(!this.loggedIn){
//   return "none";
// } else {
//   return "";
// }
// }

ngOnInit() {
}

}
