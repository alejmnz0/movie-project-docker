import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  movieList: Movie[] = [];

  count = 10000;
  page = 1;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.movieService.getPopularMoviesByPage(this.page).subscribe(resp => {
      this.movieList = resp.results;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }


}
