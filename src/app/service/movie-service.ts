import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BillboarMovieListResponse, ComingMoviesListResponse, Movie, MovieCreditsResponse, PopularMoviesListResponse } from '../models/movie-list.interface';
import { MovieResponse } from '../models/movie.interface';
import { VideoListResponse } from '../models/video-movie.interface';
import { ImageListResponse } from '../models/image-movie.interface';
import { CreditsListResponse } from '../models/credits-movie.interface';
import { environment } from '../enviroments/enviroment';
import { RatedMoviesListResponse } from '../models/rated-movies.interface';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) { }

    getPopularMoviesList(): Observable<PopularMoviesListResponse> {
        return this.http.get<PopularMoviesListResponse>('https://api.themoviedb.org/3/movie/popular?api_key=78d6414b91baf8d0ca5de73fecb5b290&language=es');
    }

    getMovieById(id: Number): Observable<MovieResponse> {
        return this.http.get<MovieResponse>('https://api.themoviedb.org/3/movie/' + id + '?api_key=78d6414b91baf8d0ca5de73fecb5b290&language=es');
    }

    getVideosByMovie(id: number): Observable<VideoListResponse> {
        return this.http.get<VideoListResponse>('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4')
    }

    getImagesByMovie(id: number): Observable<ImageListResponse> {
        return this.http.get<ImageListResponse>('https://api.themoviedb.org/3/movie/' + id + '/images?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4')
    }

    getActorsByMovie(id: number): Observable<CreditsListResponse> {
        return this.http.get<CreditsListResponse>('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4')
    }

    getPopularMoviesByPage(page: number): Observable<PopularMoviesListResponse> {
        return this.http.get<PopularMoviesListResponse>("https://api.themoviedb.org/3/movie/popular?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4&language=es&page=" + page);
    }

    getBillboardMoviesByPage(page: number): Observable<BillboarMovieListResponse> {
        return this.http.get<BillboarMovieListResponse>("https://api.themoviedb.org/3/movie/now_playing?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4&language=es&page=" + page);
    }

    getComingMoviesByPage(page: number): Observable<ComingMoviesListResponse> {
        return this.http.get<ComingMoviesListResponse>("https://api.themoviedb.org/3/movie/upcoming?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4&language=es&page=" + page);
    }

    getMoviesByActor(id: number): Observable<MovieCreditsResponse> {
        return this.http.get<MovieCreditsResponse>('https://api.themoviedb.org/3/person/' + id + '/movie_credits?api_key=78d6414b91baf8d0ca5de73fecb5b290&languaje=es')
    }

    getMoviesByGenreAndPage(id: number, page: number): Observable<PopularMoviesListResponse> {
        return this.http.get<PopularMoviesListResponse>('https://api.themoviedb.org/3/discover/movie?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4&language=es&with_genres=' + id + '&page=' + page)
    }

    getRatedMovies(): Observable<RatedMoviesListResponse> {
        return this.http.get<RatedMoviesListResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem('ACCOUNT_ID')}/rated/movies?session_id=${localStorage.getItem('SESSION_ID')}&${environment.apiKey}`);
    }
}