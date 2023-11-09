import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-horizontal-list',
  templateUrl: './movie-horizontal-list.component.html',
  styleUrls: ['./movie-horizontal-list.component.css']
})
export class MovieHorizontalListComponent {

  movieList: Movie[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMoviesList().subscribe(resp => {
      this.movieList = resp.results;
    })
  }
}
