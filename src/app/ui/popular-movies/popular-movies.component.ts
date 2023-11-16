import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInput, forkJoin } from 'rxjs';
import { Movie, PopularMoviesListResponse } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  movieList: Movie[] = [];
  favList: Movie[] = [];
  count = 0;
  page = 1;
  pagesFavorites = 0;
  selectedGenreId: number | null = null;
  request!: ObservableInput<any>;
  requests: Observable<PopularMoviesListResponse>[] = []

  constructor(private movieService: MovieService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    if (this.selectedGenreId !== null && this.selectedGenreId !== -1) {
      this.loadPageForGenre();
    } else {
      this.loadPageForPopularMovies();
    }
  }

  loadPageForPopularMovies() {
    this.getFavouriteResults()
    this.movieService.getPopularMoviesByPage(this.page).subscribe(resp => {
      this.movieList = resp.results;
      if (resp.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = resp.total_results;
      }
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadPageForGenre() {
    this.getFavouriteResults();
    this.movieService.getMoviesByGenreAndPage(this.selectedGenreId!, this.page).subscribe(resp => {
      this.movieList = resp.results;
      if (resp.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = resp.total_results;
      }
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getFavouriteResults() {
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.pagesFavorites = resp.total_pages;
    });
    if (this.pagesFavorites <= 1) {
      this.accountService.getFavoriteMovies().subscribe(resp => {
        this.favList = resp.results;
      });
    }
    if (this.pagesFavorites > 1) {
      for (let i = 1; i <= this.pagesFavorites; i++) {
        this.accountService.getFavoriteMoviesByPage(i).subscribe(resp => {
          this.favList = this.favList.concat(resp.results);
        })
      }
    }
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
