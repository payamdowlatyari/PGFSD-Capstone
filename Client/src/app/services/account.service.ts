import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAccounts(): Observable <Account[]> {
    return this.http.get<Account[]>(`${this.apiServerUrl}/account/list`);
  }

  public getAccountById(id: string): Observable <Account> {
    return this.http.get<Account>(`${this.apiServerUrl}/account/${id}`);
  }

}
