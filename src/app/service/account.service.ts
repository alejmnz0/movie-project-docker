import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
import { AccountResponse } from '../models/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountResponse> {
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.get<AccountResponse>(`${environment.apiBaseUrl}/account?session_id=${sessionId}&api_key=78d6414b91baf8d0ca5de73fecb5b290`)
  }
}
