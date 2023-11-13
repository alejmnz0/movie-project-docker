import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Genre, GenreListResponse } from '../models/genre-list.interface';

@Injectable({
    providedIn: 'root'
})
export class GenreService {

    constructor(private http: HttpClient) { }

    getGenreList(): Observable<GenreListResponse> {
        return this.http.get<GenreListResponse>('https://api.themoviedb.org/3/genre/movie/list?api_key=67e90c6f74bc6faf6aebc08470495925&language=es');
    }
}