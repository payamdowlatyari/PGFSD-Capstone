import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

	userIsAuthenticated: boolean = false;
	userIsAdmin: boolean = false;
	userId!: number;
	private authStatusSub!: Subscription;
	private adminStatusSub!: Subscription;

	constructor(private authService: AuthService, private router : Router) {}

  ngOnInit(): void {
	this.userId = this.authService.getUserId();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe((isAuthenticated: boolean) => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
    this.userIsAdmin = this.authService.getIsAdmin();
    this.adminStatusSub = this.authService.getAdminStatusListener()
      .subscribe((isAdmin: boolean) => {
        this.userIsAdmin = isAdmin;
      });
  }

  userInfo() {
    this.userId = this.authService.getUserId();
    if (this.userId) {
      this.router.navigate(['/userInfo', this.userId]);
    }
  }

  onLogout() {
    this.authService.logout();
  }


  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
    this.adminStatusSub.unsubscribe();
  }

}
