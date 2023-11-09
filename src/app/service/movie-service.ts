import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie, PopularMoviesListResponse } from '../models/movie-list.interface';
import { MovieResponse } from '../models/movie.interface';
import { Video, VideoListResponse } from '../models/video-movie.interface';
import { ImageListResponse } from '../models/image-movie.interface';
import { CreditsListResponse } from '../models/credits-movie.interface';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) { }

    getPopularMoviesList(): Observable<PopularMoviesListResponse> {
        return this.http.get<PopularMoviesListResponse>('https://api.themoviedb.org/3/movie/popular?api_key=78d6414b91baf8d0ca5de73fecb5b290');
    }

    getMovieById(id: Number): Observable<MovieResponse> {
        return this.http.get<MovieResponse>('https://api.themoviedb.org/3/movie/' + id + '?api_key=78d6414b91baf8d0ca5de73fecb5b290');
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
}