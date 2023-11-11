import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-billboard-movies',
  templateUrl: './billboard-movies.component.html',
  styleUrls: ['./billboard-movies.component.css']
})
export class BillboardMoviesComponent implements OnInit {

  movieList: Movie[] = [];

  count = 0;
  page = 1;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.movieService.getBillboardMoviesByPage(this.page).subscribe(resp => {
      this.movieList = resp.results;
      this.count = resp.total_results;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }


}