import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

loggedIn: boolean;

constructor(private dataService: DataService, private router : Router) {

	if(localStorage.getItem('PortalUserHasLoggedIn') == '' || localStorage.getItem('PortalUserHasLoggedIn') == null ) {
			this.loggedIn = false;
	} 
		else {
			this.loggedIn = true;
	} 
}
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
	this.loggedIn=false;
	
  }

ngOnInit(): void {
}

}
