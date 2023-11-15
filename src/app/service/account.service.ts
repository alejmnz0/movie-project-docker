import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
import { AccountResponse } from '../models/account.interface';
import { Movie, PopularMoviesListResponse } from '../models/movie-list.interface';
import { ProgramListResponse } from '../models/program-list.interface';
import { AddToFavouriteResponse } from '../models/add-favorite.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountResponse> {
    return this.http.get<AccountResponse>(`${environment.apiBaseUrl}/account?session_id=${localStorage.getItem("SESSION_ID")}&${environment.apiKey}`)
  }

  getFavoriteMovies(): Observable<PopularMoviesListResponse> {
    return this.http.get<PopularMoviesListResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/favorite/movies?${environment.apiKey}&language=es&session_id=${localStorage.getItem("SESSION_ID")}`)
  }

  getFavoritePrograms(): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/favorite/tv?${environment.apiKey}&language=es&session_id=${localStorage.getItem("SESSION_ID")}`)
  }

  addToFavourites(movie: any): Observable<AddToFavouriteResponse> {
    return this.http.post<AddToFavouriteResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/favorite?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}`,
      {
        media_type: movie,
        media_id: movie.id,
        favorite: true
      });
  }
}
