import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  dashboard: boolean;
  username: string = '';
  password: string = '';
  isLoading: boolean | undefined;
  id: number | undefined;

  constructor (private adminDataService: AdminDataService , private adminService: AdminService, private router: Router) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.dashboard = false;
    } else {
      this.dashboard = true;
    }
  }
  

  loginAdmin() {
    if(this.username =='' || this.password == '') {
      alert('Please enter login credentials!');
      return;
    }
    console.log(this.username + ' ' + this.password)
    this.adminService.checkAdminByCredentials(this.username, this.password)
    .subscribe(
      message => {
        if(message.message == 'success') {
          console.log(message.message)
          this.adminService.getAdmin(this.username).subscribe(
            admin => {
              this.adminDataService.setAdmin(admin);
              this.adminDataService.setIsSafe(true);
              this.router.navigate(['admin/home/admindashboard']);
            }
          )
        } else if (message.message === 'no-admin') {
          alert('Athentication faild!');
          return;
        } 
      },
      error => console.log(error),
      () => {
        this.username = '';
        this.password = '';
      }
    )
  }

  ngOnInit(): void {
  }

}
