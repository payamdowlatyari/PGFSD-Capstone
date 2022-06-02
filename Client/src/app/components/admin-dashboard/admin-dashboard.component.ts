import { Component, OnInit } from '@angular/core';
import { AdminDataService } from 'src/app/services/admin-data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  username: string = 'Admin';

  constructor(private adminDataService: AdminDataService) { }

  ngOnInit(): void {
    this.username = this.adminDataService.getAdmin().username;
  }

}
