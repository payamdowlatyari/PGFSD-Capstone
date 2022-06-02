import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CheckManagementComponent } from './components/check-management/check-management.component';
import { CheckComponent } from './components/check/check.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { UserComponent } from './components/user/user.component';
import { AdminRoutingService } from './services/admin-routing.service';
import { UserRoutingService } from './services/user-routing.service';

const routes: Routes = [  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivateChild: [UserRoutingService],
    children: [
    {path: 'dashboard', component: DashboardComponent},  
    {path: 'profile', component: ProfileComponent},
    {path: 'account', component: AccountComponent},
    {path: 'user', component: UserComponent},
    {path: 'transfer', component: TransferComponent},
    {path: 'transaction', component: TransactionComponent},
    {path: 'check', component: CheckComponent},
    {path: '**', component: LoginComponent}
  ]},
  {path: 'admin/login', component: AdminLoginComponent},
  {path: 'admin/home', component: AdminHomeComponent, canActivateChild: [AdminRoutingService],
    children: [    
    {path: 'admindashboard', component: AdminDashboardComponent},
    {path: 'checkmanagement', component: CheckManagementComponent},
    {path: '**', component: AdminLoginComponent}
  ]},
  {path: '**', redirectTo: '/login'}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
