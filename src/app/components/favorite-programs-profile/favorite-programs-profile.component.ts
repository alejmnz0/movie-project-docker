import { Component, Input, OnInit } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
import { RatedProgram } from 'src/app/models/rated-program-list.interface';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-favorite-programs-profile',
  templateUrl: './favorite-programs-profile.component.html',
  styleUrls: ['./favorite-programs-profile.component.css']
})
export class FavoriteProgramsProfileComponent implements OnInit {


  programFavoriteList: Program[] = [];
  watchList: Program[] = [];
  @Input() ratedList!: RatedProgram[];

  constructor(private accountService: AccountService) { }


  ngOnInit(): void {
    this.getWatchList();
    this.getRatedList();
    this.accountService.getFavoritePrograms().subscribe(resp => {
      this.programFavoriteList = resp.results;
    })
  }

  getRatedList() {
    this.accountService.getRatedPrograms().subscribe(resp => {
      this.ratedList = resp.results});
  }

  getWatchList() {
    this.accountService.getTvWatchlist().subscribe(resp => {
      this.watchList = resp.results});
  }
}
