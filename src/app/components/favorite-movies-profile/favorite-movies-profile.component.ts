import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-favorite-movies-profile',
  templateUrl: './favorite-movies-profile.component.html',
  styleUrls: ['./favorite-movies-profile.component.css']
})
export class FavoriteMoviesProfileComponent implements OnInit {


  movieFavoriteList: Movie[] = [];

  constructor(private accountService: AccountService) { }


  ngOnInit(): void {
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.movieFavoriteList = resp.results;
    })
  }


}
