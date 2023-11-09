import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie, PopularMoviesListResponse } from '../models/movie-list.interface';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) { }

    getPopularMoviesList(): Observable<PopularMoviesListResponse> {
        return this.http.get<PopularMoviesListResponse>('https://api.themoviedb.org/3/movie/popular?api_key=78d6414b91baf8d0ca5de73fecb5b290');
    }

    getMovieById(id: Number): Observable<Movie> {
        return this.http.get<Movie>('https://api.themoviedb.org/3/movie/' + id + '?api_key=78d6414b91baf8d0ca5de73fecb5b290');
    }
}