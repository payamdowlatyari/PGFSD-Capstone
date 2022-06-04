import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/models/account';
import { Check } from '../models/check';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAccounts(): Observable <Account[]> {
    return this.http.get<Account[]>(`${this.apiServerUrl}/account/list`);
  }

  public getAccountByNumber(number: string): Observable <Account> {
    return this.http.get<Account>(`${this.apiServerUrl}/account/accountnumber/${number}`);
  }

  public requestCheckBooks(id: string) : Observable<Check[]> {
    return this.http.get<Check[]>(`${this.apiServerUrl}/account/checkbook/${id}`)
  }


}
