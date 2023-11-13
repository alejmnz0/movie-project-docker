import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/movie.interface';
import { GenreService } from 'src/app/service/genre-service';

@Component({
  selector: 'app-movie-item-secondary',
  templateUrl: './movie-item-secondary.component.html',
  styleUrls: ['./movie-item-secondary.component.css']
})
export class MovieItemSecondaryComponent {

  @Input() movie: any;

  getMovieImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
  }
}
