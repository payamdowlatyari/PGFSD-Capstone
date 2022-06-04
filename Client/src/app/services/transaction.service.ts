import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  // getFilteredTransactions(accountNumber: any, startDate: Date, endDate: Date) {
  //   throw new Error('Method not implemented.');
  // }

  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  postTransaction(transaction: Transaction) : Observable<Message> {
    return this.http.post<Message>(`${this.apiServerUrl}/transaction/post`, transaction);
  }

  getTransactions(id: string) : Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiServerUrl}/account/transactions/${id}`);
  }

  getFilteredTransactions(accountNumber: string, startDate: Date, endDate: Date) : Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiServerUrl}/transactions/${accountNumber}/${startDate}/${endDate}`);
  }

  getAllTransactions() : Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiServerUrl}/admin/transactions`)
  }

  permitTransaction(id: string) : Observable<Message> {
    return this.http.get<Message>(`${this.apiServerUrl}/admin/allow/transaction/${id}`)
  }
}
