import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-favorite-movies-profile',
  templateUrl: './favorite-movies-profile.component.html',
  styleUrls: ['./favorite-movies-profile.component.css']
})
export class FavoriteMoviesProfileComponent implements OnInit {


  movieList: Movie[] = [];
  ratedList: RatedMovie[] = [];

  constructor(private accountService: AccountService, private movieService: MovieService) { }


  ngOnInit(): void {
    this.getRatedList();
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.movieList = resp.results;
    })

  }

  getRatedList() {
    this.accountService.getRatedMovies().subscribe(resp => {
      this.ratedList = resp.results});
  }


}
