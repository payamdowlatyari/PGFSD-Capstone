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

  getTransactions(accountNumber: string) : Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(`${this.apiServerUrl}/transaction/${accountNumber}`);
  }

  getFilteredTransactions(accountNumber: string, startDate: Date, endDate: Date) : Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(`${this.apiServerUrl}/transactions/${accountNumber}/${startDate}/${endDate}`);
  }

  // getAllPendingTransaction() : Observable<Array<Transaction>> {
  //   return this.http.get<Array<Transaction>>(`${this.apiServerUrl}/admin/get-all-pending-transactions`)
  // }

  // permitTransaction(id: number) : Observable<Message> {
  //   return this.http.get<Message>(`${this.apiServerUrl}/admin/allow/transaction/${id}`)
  // }
}
