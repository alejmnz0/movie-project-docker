import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramListResponse } from '../models/program.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http : HttpClient) { }

  getPopularProgramList(page: number): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>('https://api.themoviedb.org/3/tv/popular?api_key=78d6414b91baf8d0ca5de73fecb5b290&page=' + page);
  }
}
