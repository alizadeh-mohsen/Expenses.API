import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../models/weather';
import { Transaction } from '../models/transactions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'https://localhost:7160/';
  constructor(private http: HttpClient) { }

  getWeatherForecast(): Observable<Weather[]> {
    return this.http.get<Weather[]>(`${this.apiUrl}weatherforecast`);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}transactions`);
  }
  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}transactions/${id}`);
  }
  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}transactions`, transaction);
  }
  updateTransaction(id: number, transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.apiUrl}transactions/${id}`, transaction);
  }
  deleteTransaction(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}transactions/${id}`);
  }

}
