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
export class MovieItemComponent implements OnInit {
  @Input() movie: any;
  longitudMaxima: number = 23;
  favouriteMovies: Movie[] = [];
  movieFavorite!: Movie | null;
  favourite = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.isFavourite();
  }

  addToFavourite() {
    this.accountService.addToFavourites(this.movie);
  }

  isFavourite() {
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.favouriteMovies = resp.results;
      const foundMovie = this.favouriteMovies.find(movieSelected => movieSelected.id === this.movie.id);
      this.favourite = foundMovie !== undefined;
    });

    this.favourite = true

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

  comprobarSiEsPeli(): boolean {
    return (this.movie.title.size > 0)
  }

  getImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
  }

}
