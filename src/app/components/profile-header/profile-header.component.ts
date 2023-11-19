import { Component, Input, OnInit } from '@angular/core';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { RatedProgram } from 'src/app/models/rated-program-list.interface';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  avatarUrl = localStorage.getItem('AVATAR_PATH');
  username = localStorage.getItem('USERNAME');
  movieRatedList: RatedMovie[] = [];
  ProgramRatedList: RatedProgram[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getRatedMovies().subscribe(resp => {
      this.movieRatedList = resp.results;
    });
    this.getMediaRatedMovies();

    this.accountService.getRatedPrograms().subscribe(resp => {
      this.ProgramRatedList = resp.results;
    });
    this.getMediaRatedSeries();
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

  getMediaRatedSeries(): number {
    let votos: number = 0;
    let cantSeries: number = 0;
    this.ProgramRatedList.forEach(program => {
      votos += (program.vote_average * 10);
      cantSeries++
    });
    return votos / cantSeries;
  }
}
