import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Movie } from 'src/app/models/movie-list.interface';
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
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.pagesFavorites = resp.total_pages;
    })
    if (this.pagesFavorites == 1) {

    }
    let requests = [
      this.movieService.getPopularMoviesByPage(this.page),
      //this.accountService.getFavoriteMovies()
    ];

    forkJoin(requests).subscribe((respArray) => {
      let respMovies = respArray[0];
      let respFav = respArray[1];
      this.favList = respFav.results;

      this.movieList = respMovies.results;
      if (respMovies.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = respMovies.total_results;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadPageForGenre() {
    let requests = [
      this.movieService.getMoviesByGenreAndPage(this.selectedGenreId!, this.page),
      this.accountService.getFavoriteMovies()
    ];
    forkJoin(requests).subscribe((respArray) => {
      let respMovies = respArray[0];
      let respFav = respArray[1];
      this.favList = respFav.results;

      this.movieList = respMovies.results;
      if (respMovies.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = respMovies.total_results;
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
