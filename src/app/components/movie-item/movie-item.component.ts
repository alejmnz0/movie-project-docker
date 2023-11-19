import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from 'src/app/service/movie-service';
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/models/movie-list.interface';
import { Program } from 'src/app/models/program-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie: any;
  @Input() isFav: any;
  @Input() isOnWatchList: any;
  @Input() rate!: any;
  longitudMaxima: number = 23;
  favouriteMovies: Movie[] = [];

  constructor(private accountService: AccountService, private movieService: MovieService, private snackBar: MatSnackBar) { }


  toggleFavourite(): void {
    if (this.isFav) {
      this.accountService.removeMovieFromFavourites(this.movie).subscribe(resp => {
        this.isFav = false;
      });
    } else {
      this.accountService.addMovieToFavourites(this.movie).subscribe(resp => {
        this.isFav = true;
      });
    }
  }

  getPorcentaje(numero: number) {
    return numero * 10
  }

  acortarTitulo(titulo: string) {
    if (titulo.length > this.longitudMaxima) {
      return titulo.substring(0, this.longitudMaxima
      ) + '...';
    } else {
      return titulo;
    }

  }


  getImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
  }

  doRate() {
    this.accountService.rateMovie(this.movie.id, (this.rate * 2)).subscribe(resp => {
    });

  }

  toggleWatchlist(): void {
    if (this.isOnWatchList) {
      debugger
      this.accountService.removeMovieFromWatchlist(this.movie.id).subscribe(resp => {
        this.isOnWatchList = false;
        this.openSnackBar1();
      });
    } else {
      debugger
      this.accountService.addMovieToWatchlist(this.movie.id).subscribe(resp => {
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
}
