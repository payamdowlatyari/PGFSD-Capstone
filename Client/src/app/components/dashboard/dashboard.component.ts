import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.username = this.dataService.getUser().firstname;
  }
}