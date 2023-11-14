import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramListResponse } from '../models/program-list.interface';
import { Observable } from 'rxjs';
import { ProgramResponse } from '../models/program.interface';
import { VideoListResponse } from '../models/video-movie.interface';
import { ImageListResponse } from '../models/image-movie.interface';
import { CreditsListResponse } from '../models/credits-movie.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  getPopularProgramList(page: number): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>('https://api.themoviedb.org/3/tv/popular?api_key=78d6414b91baf8d0ca5de73fecb5b290&language=es&page=' + page);
  }

  getTodayProgramList(page: number): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>('https://api.themoviedb.org/3/tv/airing_today?api_key=78d6414b91baf8d0ca5de73fecb5b290&language=es&page=' + page);
  }

  getRatedProgramList(page: number): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>('https://api.themoviedb.org/3/tv/top_rated?api_key=78d6414b91baf8d0ca5de73fecb5b290&language=es&page=' + page);
  }

  getProgramById(id: Number): Observable<ProgramResponse> {
    return this.http.get<ProgramResponse>('https://api.themoviedb.org/3/tv/' + id + '?api_key=78d6414b91baf8d0ca5de73fecb5b290&language=es');
  }

  getVideosByMovie(id: number): Observable<VideoListResponse> {
    return this.http.get<VideoListResponse>('https://api.themoviedb.org/3/tv/' + id + '/videos?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4')
  }

  getImagesByMovie(id: number): Observable<ImageListResponse> {
    return this.http.get<ImageListResponse>('https://api.themoviedb.org/3/tv/' + id + '/images?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4')
  }

  getActorsByMovie(id: number): Observable<CreditsListResponse> {
    return this.http.get<CreditsListResponse>('https://api.themoviedb.org/3/tv/' + id + '/credits?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4')
  }

  getProgramsByGenreAndPage(id: number, page: number): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>('https://api.themoviedb.org/3/discover/tv?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4&language=es&with_genres=' + id + '&page=' + page)
  }

}
