import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  getJSON() {
    return this.http.get('../assets/data/transactions.json');
  }
}
