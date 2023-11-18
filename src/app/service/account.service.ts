import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
import { AccountResponse } from '../models/account.interface';
import { Movie, PopularMoviesListResponse } from '../models/movie-list.interface';
import { ProgramListResponse } from '../models/program-list.interface';
import { AddToFavouriteResponse } from '../models/add-favorite.interface';
import { RatedMoviesListResponse } from '../models/rated-movie-list.interface';
import { StatusCodeResponse } from '../models/status-code.interface';
import { RatedProgramListResponse } from '../models/rated-program-list.interface';

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

  getFavoriteMoviesByPage(page: number): Observable<PopularMoviesListResponse> {
    return this.http.get<PopularMoviesListResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/favorite/movies?${environment.apiKey}&language=es&session_id=${localStorage.getItem("SESSION_ID")}&page=${page}`)
  }

  getFavoriteProgramsByPage(page: number): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/favorite/tv?${environment.apiKey}&language=es&session_id=${localStorage.getItem("SESSION_ID")}&page=${page}`)
  }

  getFavoritePrograms(): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/favorite/tv?${environment.apiKey}&language=es&session_id=${localStorage.getItem("SESSION_ID")}`)
  }

  addMovieToFavourites(movie: any): Observable<AddToFavouriteResponse> {
    return this.http.post<AddToFavouriteResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/favorite?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}`,
      {
        media_type: "movie",
        media_id: movie.id,
        favorite: true
      });
  }

  removeMovieFromFavourites(movie: any): Observable<AddToFavouriteResponse> {
    return this.http.post<AddToFavouriteResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/favorite?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}`,
      {
        media_type: "movie",
        media_id: movie.id,
        favorite: false
      });
  }

  addProgramToFavourites(program: any): Observable<AddToFavouriteResponse> {
    return this.http.post<AddToFavouriteResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/favorite?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}`,
      {
        media_type: "tv",
        media_id: program.id,
        favorite: true
      });
  }

  removeProgramFromFavourites(program: any): Observable<AddToFavouriteResponse> {
    return this.http.post<AddToFavouriteResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("ACCOUNT_ID")}/favorite?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}`,
      {
        media_type: "tv",
        media_id: program.id,
        favorite: false
      });
  }

  getRatedMovies(): Observable<RatedMoviesListResponse> {
    return this.http.get<RatedMoviesListResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem('ACCOUNT_ID')}/rated/movies?session_id=${localStorage.getItem('SESSION_ID')}&${environment.apiKey}`);
}

getRatedPrograms(): Observable<RatedProgramListResponse> {
  return this.http.get<RatedProgramListResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem('ACCOUNT_ID')}/rated/tv?session_id=${localStorage.getItem('SESSION_ID')}&${environment.apiKey}`);
}



rateMovie(movieId: number, rate: any): Observable<StatusCodeResponse> {
    return this.http.post<StatusCodeResponse>(`https://api.themoviedb.org/3/movie/${movieId}/rating?${environment.apiKey}&session_id=${localStorage.getItem('SESSION_ID')}`,
        {
            value: rate
        });
}

rateProgram(tvId: number, rate: any): Observable<StatusCodeResponse> {
  return this.http.post<StatusCodeResponse>(`https://api.themoviedb.org/3/tv/${tvId}/rating?${environment.apiKey}&session_id=${localStorage.getItem('SESSION_ID')}`,
      {
          value: rate
      });
}

}
