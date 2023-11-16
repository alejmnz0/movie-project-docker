import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-favorite-movies-profile',
  templateUrl: './favorite-movies-profile.component.html',
  styleUrls: ['./favorite-movies-profile.component.css']
})
export class FavoriteMoviesProfileComponent implements OnInit {


  movieList: Movie[] = [];

  constructor(private accountService: AccountService, private movieService: MovieService) { }


  ngOnInit(): void {
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.movieList = resp.results;
    })

  }


}
