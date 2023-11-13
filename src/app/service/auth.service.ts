import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetRequestTokenResponse } from '../models/request-token.interface';
import { environment } from '../enviroments/enviroment';
import { CreateSessionResponse } from '../models/create-session.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getRequestToken(): Observable<GetRequestTokenResponse> {
    return this.http.get<GetRequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new?api_key=78d6414b91baf8d0ca5de73fecb5b290`);
  }

  createSession(token: string): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(`${environment.apiBaseUrl}/authentication/session/new?api_key=78d6414b91baf8d0ca5de73fecb5b290`,
    {
      request_token: token
    });
  }

}
