import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  selectedMovie !: Movie;
  movieId = 0;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private movieService: MovieService) {
    this.movieId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.movieId).subscribe(resp => {
      this.selectedMovie = resp;
    })
  }

  getImageItem() {
    return "https://image.tmdb.org/t/p/w500/" + this.selectedMovie.poster_path
  }
}
