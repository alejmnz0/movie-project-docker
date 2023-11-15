import { Component, ElementRef, OnInit, Renderer2, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Cast, Department } from 'src/app/models/credits-movie.interface';
import { Genre, GenreListResponse } from 'src/app/models/genre-list.interface';
import { Backdrop } from 'src/app/models/image-movie.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieResponse } from 'src/app/models/movie.interface';
import { Video } from 'src/app/models/video-movie.interface';
import { GenreService } from 'src/app/service/genre-service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  selectedMovie !: MovieResponse;
  genreList: Genre[] = []
  movieId = 0;
  route: ActivatedRoute = inject(ActivatedRoute);
  videoList: Video[] = [];
  imageList: Backdrop[] = [];
  actorList: Cast[] = [];

  constructor(private movieService: MovieService, private sanitazer: DomSanitizer) {
    this.movieId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.movieId).subscribe(resp => {
      this.selectedMovie = resp;
    })
    this.movieService.getVideosByMovie(this.movieId).subscribe(resp => {
      this.videoList = resp.results;
    })
    this.movieService.getImagesByMovie(this.movieId).subscribe(resp => {
      this.imageList = resp.backdrops;
    })
    this.movieService.getActorsByMovie(this.movieId).subscribe(resp => {
      this.actorList = resp.cast
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getImageItem() {
    return "https://image.tmdb.org/t/p/w500/" + this.selectedMovie.poster_path
  }

  getBannerUrl() {
    return "https://image.tmdb.org/t/p/original/" + this.selectedMovie.backdrop_path
  }

  getYear(): string {
    if (this.selectedMovie.release_date.length >= 4) {
      return this.selectedMovie.release_date.substring(0, 4);
    } else {
      return this.selectedMovie.release_date;
    }
  }

  getVideoUrl(videoSelected: Video) {
    if (videoSelected.site == 'YouTube') {
      return this.sanitazer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoSelected.key);
    } else {
      return this.sanitazer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + videoSelected.key);
    }
  }

  countVideos() {
    return this.videoList.length;
  }

  getImagesMovieUrl(imageSelected: Backdrop) {
    return "https://image.tmdb.org/t/p/original/" + imageSelected.file_path;
  }

  countImages() {
    return this.imageList.length;
  }

  getActorImage(actor: Cast) {
    return "https://image.tmdb.org/t/p/w500/" + actor.profile_path
  }

  getPorcentaje(numero: number) {
    return numero * 10
  }

}
