import { Component, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Cast, Department } from 'src/app/models/credits-movie.interface';
import { Genre, GenreListResponse } from 'src/app/models/genre-list.interface';
import { Backdrop } from 'src/app/models/image-movie.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieResponse } from 'src/app/models/movie.interface';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { Video } from 'src/app/models/video-movie.interface';
import { AccountService } from 'src/app/service/account.service';
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
  ratedList: RatedMovie[] = [];
  rate = 0;
  route: ActivatedRoute = inject(ActivatedRoute);
  videoList: Video[] = [];
  imageList: Backdrop[] = [];
  actorList: Cast[] = [];
  pages: number = 0;
  pagesWatchList = 0;
  pagesRated = 0;
  favouriteMovies: Movie[] = [];
  watchList: Movie[] = [];
  isOnWatchList = false;
  favourite = false;

  constructor(private movieService: MovieService, private sanitazer: DomSanitizer, private accountService: AccountService, private snackBar: MatSnackBar) {
    this.movieId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.movieId).subscribe(resp => {
      this.selectedMovie = resp;
    })
    this.getTotalPagesFavorite();
    this.getTotalPagesRated();
    this.getTotalPagesWatchList();
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

  getRate(){
    if (this.pagesRated <= 1) {
      this.accountService.getRatedMovies().subscribe(resp => {
        this.ratedList = resp.results;
        let valor = this.ratedList.find(currentMovie => currentMovie.id === this.selectedMovie.id)?.rating ?? 0;
        this.rate = valor/2;
      });
    } else {
      for (let i = 1; i <= this.pagesRated; i++) {
        this.accountService.getRatedMoviesByPage(i).subscribe(resp => {
          this.ratedList = this.ratedList.concat(resp.results);
          let valor = this.ratedList.find(currentMovie => currentMovie.id === this.selectedMovie.id)?.rating ?? 0;
          this.rate = valor/2;
        });
      }
    }
  }

  getTotalPagesFavorite() {
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.pages = resp.total_pages;
      this.isFavourite();
    });
  }

  getTotalPagesRated() {
    this.accountService.getRatedMovies().subscribe(resp => {
      this.pagesRated = resp.total_pages;
      this.getRate();
    });
  }

  getTotalPagesWatchList() {
    this.accountService.getMovieWatchlist().subscribe(resp => {
      this.pagesWatchList = resp.total_pages;
      this.isWatchListed();
    });
  }

  toggleFavourite(): void {
    if (this.favourite) {
      this.accountService.removeMovieFromFavourites(this.selectedMovie).subscribe(resp => {
        this.favourite = false;
      });
    } else {
      this.accountService.addMovieToFavourites(this.selectedMovie).subscribe(resp => {
        this.favourite = true;
      });
    }
  }

  toggleWatchlist(): void {
    if (this.isOnWatchList) {
      this.accountService.removeMovieFromWatchlist(this.selectedMovie.id).subscribe(resp => {
        this.isOnWatchList = false;
        this.openSnackBar1();
      });
    } else {
      this.accountService.addMovieToWatchlist(this.selectedMovie.id).subscribe(resp => {
        this.isOnWatchList = true;
        this.openSnackBar2();
      });
    }
  }

  openSnackBar1() {
    this.snackBar.open("Se ha eliminado de la watch list con exito", "close", {duration: 5000, horizontalPosition: "left", verticalPosition: "bottom"});
  }

  openSnackBar2() {
    this.snackBar.open("Se ha añadido a la watch list con exito", "close", {duration: 5000, horizontalPosition: "left", verticalPosition: "bottom"});
  }

  isFavourite() {
    if (this.pages <= 1) {
      this.accountService.getFavoriteMovies().subscribe(resp => {
        this.favouriteMovies = resp.results;
        const foundMovie = this.favouriteMovies.find(currentMovie => currentMovie.id === this.selectedMovie.id);
        this.favourite = foundMovie !== undefined;
      });
    } else {
      for (let i = 1; i <= this.pages; i++) {
        this.accountService.getFavoriteMoviesByPage(i).subscribe(resp => {
          this.favouriteMovies = this.favouriteMovies.concat(resp.results);
          const foundMovie = this.favouriteMovies.find(currentMovie => currentMovie.id === this.selectedMovie.id);
          this.favourite = foundMovie !== undefined;
        });
      }
    }
  }

  isWatchListed() {
    if (this.pagesWatchList <= 1) {
      this.accountService.getMovieWatchlist().subscribe(resp => {
        this.watchList = resp.results;
        const foundMovie = this.watchList.find(currentMovie => currentMovie.id === this.selectedMovie.id);
        this.isOnWatchList = foundMovie !== undefined;
      });
    } else {
      for (let i = 1; i <= this.pagesWatchList; i++) {
        this.accountService.getMovieWatchlistByPage(i).subscribe(resp => {
          this.watchList = this.watchList.concat(resp.results);
          const foundMovie = this.watchList.find(currentMovie => currentMovie.id === this.selectedMovie.id);
          this.isOnWatchList = foundMovie !== undefined;
        });
      }
    }
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

  doRate() {
    this.accountService.rateMovie(this.movieId, (this.rate * 2)).subscribe(resp => {
    });
  }

}
