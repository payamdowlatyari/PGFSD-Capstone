import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  dashboard: boolean;
  username: string = '';
  password: string = '';
  // form: FormGroup | undefined;
  // authStatusSub: Subscription | undefined;
  isLoading: boolean | undefined;
  userId: number | undefined;

  constructor (private adminDataService: AdminDataService , private router: Router) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.dashboard = false;
    } else {
      this.dashboard = true;
    }
  }
  

  loginAdmin() {
    if(this.username === 'admin' && this.password === 'admin') {
      this.adminDataService.setIsSafe(true);
      this.router.navigate(['admin/home/admindashboard']);
      return;
    }
    alert('Login failed!');
  }

  // onSubmit() {
  // 	this.loginService.sendAdminCredential(this.username, this.password).subscribe(
  //     res => {
  //       this.dashboard=true;
  //       localStorage.setItem('PortalAdminHasLoggedIn', 'true');
  //       location.reload();
  //     },
  //     err => console.log(err)
  //   );
  // }

  // getDashboard() {
  //   if(!this.dashboard){
  //     return "none";
  //   } else {
  //     return "";
  //   }
  // }


  // logout(){
  //   this.loginService.logout().subscribe(
  //     res => {
  //              this.router.navigate(['/']);     
  //     },
  //     err => console.log(err)
  //     );
  //     location.reload();
  //    localStorage.setItem('PortalAdminHasLoggedIn', '');
  //   this.dashboard=false;
  // }

  ngOnInit(): void {
  }

}
