import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user!: User;
  private isSafe: boolean = false;

  constructor() { }

  public getUser() : User {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
  }

  public resetUser() {
    this.user.id = '';
  }

  public getIsSafe() : boolean {
    return this.isSafe;
  }

  public setIsSafe(isSafe: boolean) {
    this.isSafe = isSafe;
  }
}
