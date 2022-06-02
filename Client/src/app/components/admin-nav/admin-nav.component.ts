import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from 'src/app/services/admin-data.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  dashboard: boolean;
    
  constructor(private dataService: AdminDataService, private router : Router) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.dashboard = false;
    } else {
        this.dashboard = true;
      }  
  }
  
    onDashboard() {
      this.router.navigate(['admin/home/admindashboard']);
    }
  
    onChequeBooks() {
      this.router.navigate(['admin/home/checkmanagement']);
    }
  
    onLogout() {
      this.dataService.setIsSafe(false);
      this.dataService.resetAdmin();
      this.router.navigate(['login']);
      localStorage.setItem('PortalAdminHasLoggedIn', '');
      this.dashboard=false;
    }
  
  ngOnInit(): void {
  }
  
}
