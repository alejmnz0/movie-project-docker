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
  selectedGenreId: number | null = null;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    if (this.selectedGenreId !== null && this.selectedGenreId !== -1) {
      this.loadPageForGenre();
    } else {
      this.loadPageForBillboardMovies();
    }
  }

  loadPageForBillboardMovies() {
    this.movieService.getBillboardMoviesByPage(this.page).subscribe((resp) => {
      this.movieList = resp.results;
      this.count = resp.total_results;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadPageForGenre() {
    this.movieService.getMoviesByGenreAndPage(this.selectedGenreId!, this.page).subscribe((resp) => {
      this.movieList = resp.results;
      if (resp.total_results >= 10000) {
        this.count = 10000;
      } else {
        this.count = resp.total_results;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  showAllMovies(id: number) {
    this.selectedGenreId = id;
    this.page = 1;
    this.loadNewPage();
  }

  showMoviesByGenre(id: number) {
    this.selectedGenreId = id;
    this.page = 1;
    this.loadNewPage();
  }


}