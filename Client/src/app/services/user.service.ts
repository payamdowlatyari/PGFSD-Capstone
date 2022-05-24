import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAccounts() {
    throw new Error('Method not implemented.');
  }

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable <User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/list`);
  }

  // login(body) {
  //   return this.http.post(`${config.hostServer}/user/login`, body);
  // }

  // register(body) {
  //   return this.http.post(`${config.hostServer}/user/register`, body);
  // }

}
