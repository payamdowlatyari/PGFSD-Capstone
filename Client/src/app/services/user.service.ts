import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';
import { Check } from '../models/check';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable <User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/list`);
  }

  getUser(username: string) : Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/username/${username}`);
  }

  createUser(user: User) : Observable<Message> {
    return this.http.post<Message>(`${this.apiServerUrl}/user/create`, user);
  }

  checkUserByCredentials(username: string, password: string) : Observable<Message> {
    return this.http.get<Message>(`${this.apiServerUrl}/user/exists/${username}/${password}`);
  }

  updatePassword(newPassword: string, id: string) {
    return this.http.get<Message>(`${this.apiServerUrl}/user/update/password/${newPassword}/${id}`)
  }

  requestCheckBook(id: string, pages: string) {
    return this.http.post<Message>(`${this.apiServerUrl}/user/checkrequest/${id}`,pages)
  }

  // getCheckBookRequests() : Observable<Array<any>> {
  //   return this.http.get<Array<any>>(`${this.apiServerUrl}/admin/checkrequests`);
  // }

  // acceptCheckBookRequest(id: string) : Observable<Message> {
  //   return this.http.get<Message>(`${this.apiServerUrl}/admin/checkrequests/accept/${id}`);
  // }

}
