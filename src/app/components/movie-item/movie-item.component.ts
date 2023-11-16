import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/models/movie-list.interface';
import { Program } from 'src/app/models/program-list.interface';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie: any;
  @Input() isFav: any;
  longitudMaxima: number = 23;
  favouriteMovies: Movie[] = [];

  constructor(private accountService: AccountService) { }


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

}
