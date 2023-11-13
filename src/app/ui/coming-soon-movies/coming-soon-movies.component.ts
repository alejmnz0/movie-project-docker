import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-coming-soon-movies',
  templateUrl: './coming-soon-movies.component.html',
  styleUrls: ['./coming-soon-movies.component.css']
})
export class ComingSoonMoviesComponent implements OnInit {

  movieList: Movie[] = [];

  count = 0;
  page = 1;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.movieService.getComingMoviesByPage(this.page).subscribe(resp => {
      this.movieList = resp.results;
      this.count = resp.total_results;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }


}