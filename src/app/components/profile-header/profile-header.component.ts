import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  avatarUrl = localStorage.getItem('AVATAR_PATH');
  username = localStorage.getItem('USERNAME');
  movieRatedList: RatedMovie[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getRatedMovies().subscribe(resp => {
      this.movieRatedList = resp.results;
    });
    this.getMediaRatedMovies();
  }


  getMediaRatedMovies(): number {
    let votos: number = 0;
    let cantPelis: number = 0;
    this.movieRatedList.forEach(movie => {
      votos += (movie.vote_average * 10);
      cantPelis++
    });
    return votos / cantPelis;
  }
}
