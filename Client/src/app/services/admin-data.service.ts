import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  private isSafe: boolean = false;
  private admin!: Admin;

  constructor() { }

  public getAdmin() : Admin {
    return this.admin;
  }

  public setAdmin(admin: Admin) {
    this.admin = admin;
  }

  public resetAdmin() {
    this.admin.id = '';
  }


  public getIsSafe() : boolean {
    return this.isSafe;
  }

  public setIsSafe(isSafe: boolean) {
    this.isSafe = isSafe;
  }
}
