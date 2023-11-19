import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Movie } from 'src/app/models/movie-list.interface';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-page-watchlist-movies',
  templateUrl: './page-watchlist-movies.component.html',
  styleUrls: ['./page-watchlist-movies.component.css']
})
export class PageWatchlistMoviesComponent {

  movieList: Movie[] = [];
  favList: Movie[] = [];
  ratedList: RatedMovie[] = [];
  watchList: Movie[] = [];
  count = 0;
  page = 1;

  constructor(private accountService: AccountService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage()
  }

  loadNewPage() {
    this.getFavouriteList();
    this.getRatedList();
    let requests = [
      this.accountService.getMovieWatchlistByPage(this.page),
      this.accountService.getMovieWatchlistByPage(this.page)
    ];

    forkJoin(requests).subscribe((respArray) => {
      let respMovies = respArray[0];
      let respFav = respArray[1];
      this.watchList = respFav.results;

      this.movieList = respMovies.results;
      if (respMovies.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = respMovies.total_results;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  getRatedList() {
    this.accountService.getRatedMovies().subscribe(resp => {
      this.ratedList = resp.results});
  }

  getFavouriteList() {
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.favList = resp.results});
  }

}
