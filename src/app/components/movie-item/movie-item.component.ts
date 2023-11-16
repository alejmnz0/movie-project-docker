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
  @Input() isFav: any;
  longitudMaxima: number = 23;
  favouriteMovies: Movie[] = [];
  movieFavorite!: Movie | null;
  favourite = false;
  pages: number = 0;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getTotalPages();
    //this.isFavourite();
  }


  toggleFavourite(): void {
    if (this.favourite) {
      this.accountService.removeMovieFromFavourites(this.movie).subscribe(resp => {
        this.isFav = false;
      });
    } else {
      this.accountService.addMovieToFavourites(this.movie).subscribe(resp => {
        this.isFav = true;
      });
    }
  }

  getTotalPages() {
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.pages = resp.total_pages;
    })
  }

  /*isFavourite() {
    if (this.pages <= 1) {
      this.accountService.getFavoriteMovies().subscribe(resp => {
        this.favouriteMovies = resp.results;
        const foundMovie = this.favouriteMovies.find(movieSelected => movieSelected.id === this.movie.id);
        this.favourite = foundMovie !== undefined;
      });
    }
    if (this.pages > 1) {
      for (let i = 1; i <= this.pages; i++) {
        this.accountService.getFavoriteMoviesByPage(i).subscribe(resp => {
          this.favouriteMovies = this.favouriteMovies.concat(resp.results);
          const foundMovie = this.favouriteMovies.find(movieSelected => movieSelected.id === this.movie.id);
          this.favourite = foundMovie !== undefined;
        });
      }
    }
  }*/

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
