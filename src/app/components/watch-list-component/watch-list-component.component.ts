import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-watch-list-component',
  templateUrl: './watch-list-component.component.html',
  styleUrls: ['./watch-list-component.component.css']
})
export class WatchListComponentComponent {

  movieList: Movie[] = [];
  ratedList: RatedMovie[] = [];
  favouriteList: Movie[] = [];

  constructor(private accountService: AccountService, private movieService: MovieService) { }


  ngOnInit(): void {
    this.getFavouriteList();
    this.getRatedList();
    this.accountService.getMovieWatchlist().subscribe(resp => {
      this.movieList = resp.results;
    })

  }

  getRatedList() {
    this.accountService.getRatedMovies().subscribe(resp => {
      this.ratedList = resp.results});
  }

  getFavouriteList() {
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.favouriteList = resp.results});
  }

}
