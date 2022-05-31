import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
// import { AuthService } from 'src/app/services/auth.service';
// import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

dashboard: boolean;
loggedIn: boolean;

constructor(private dataService: DataService, private router : Router) {
	if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
		this.dashboard = false;
	} else {
			this.dashboard = true;
		}  

	if(localStorage.getItem('PortalUserHasLoggedIn') == '' || localStorage.getItem('PortalUserHasLoggedIn') == null ) {
			this.loggedIn = false;
	} 
		else {
			this.loggedIn = true;
	} 
}

// logout(){

// 		this.router.navigate(['/login']);   
//     	localStorage.setItem('PortalUserHasLoggedIn', '');
//    		this.loggedIn=false;
   
// }

// adminLogout(){

// 	  	this.router.navigate(['/login']);   
// 	 	localStorage.setItem('PortalAdminHasLoggedIn', '');
// 		this.dashboard=false;
// }

// getDisplay() {
// if(!this.loggedIn){
//   return "none";
// } else {
//   return "";
// }
// }

//  dashboardDisplay() {
//     if(!this.dashboard){
//       return "none";
//     } else {
//       return "";
//     }
//   }

  onDashboard() {
    this.router.navigate(['home/dashboard']);
  }

  onAccounts() {
    this.router.navigate(['home/account']);
  }

  onChequeBooks() {
    this.router.navigate(['home/check']);
  }

  onTransaction() {
      this.router.navigate(['home/transaction']);
  }

  onTransfer() {
    this.router.navigate(['home/transfer']);
  }

  onProfile() {
    this.router.navigate(['home/profile']);
  }

  onLogout() {
    this.dataService.setIsSafe(false);
    this.dataService.resetUser();
    this.router.navigate(['login']);
	localStorage.setItem('PortalUserHasLoggedIn', '');
	localStorage.setItem('PortalAdminHasLoggedIn', '');
	this.loggedIn=false;
	this.dashboard=false;
  }

ngOnInit(): void {
}

}
