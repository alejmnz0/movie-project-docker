import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramListResponse } from '../models/program.interface';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  getPopularProgramList(page: number): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>(`${environment.apiBaseUrl}/tv/popular?${environment.apiKey}&language=es&page=${page}`);
  }

  getTodayProgramList(page: number): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>(`${environment.apiBaseUrl}/tv/airing_today?${environment.apiKey}&language=es&page=${page}`);
  }

  getRatedProgramList(page: number): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>(`${environment.apiBaseUrl}/tv/top_rated?${environment.apiKey}&language=es&page=${page}`);
  }
}
