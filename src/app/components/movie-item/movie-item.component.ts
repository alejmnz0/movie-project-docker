import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  rate = 0;
  @Input() movie: any;
  longitudMaxima: number = 23;

  constructor(private movieService: MovieService) { }

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

  leave() {
    alert(this.rate + " asd " + this.movie.id + " " + localStorage.getItem('SESSION_ID'))
    this.movieService.rateMovie(this.movie.id, this.rate * 2);

  }
}
