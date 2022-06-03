import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../models/admin';
import { Check } from '../models/check';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAdmins(): Observable <Admin[]> {
    return this.http.get<Admin[]>(`${this.apiServerUrl}/admin/list`);
  }

  getAdmin(username: string) : Observable<Admin> {
    return this.http.get<Admin>(`${this.apiServerUrl}/admin/username/${username}`);
  }

  createAdmin(admin: Admin) : Observable<Message> {
    return this.http.post<Message>(`${this.apiServerUrl}/admin/create`, admin);
  }

  checkAdminByCredentials(username: string, password: string) : Observable<Message> {
    return this.http.get<Message>(`${this.apiServerUrl}/admin/exists/${username}/${password}`);
  }

  updatePassword(newPassword: string, id: string) {
    return this.http.get<Message>(`${this.apiServerUrl}/admin/update/password/${newPassword}/${id}`)
  }

  getCheckBookRequests() : Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.apiServerUrl}/admin/checkbook`);
  }

  acceptCheckBookRequest(id: string) : Observable<Message> {
    return this.http.get<Message>(`${this.apiServerUrl}/admin/checkbook/accept/${id}`);
  }
}
