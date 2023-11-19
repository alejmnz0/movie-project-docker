import { Component } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
import { RatedProgram } from 'src/app/models/rated-program-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-watch-list-programs',
  templateUrl: './watch-list-programs.component.html',
  styleUrls: ['./watch-list-programs.component.css']
})
export class WatchListProgramsComponent {

  programList: Program[] = [];
  ratedList: RatedProgram[] = [];
  favouriteList: Program[] = [];

  constructor(private accountService: AccountService, private programService: ProgramService) { }


  ngOnInit(): void {
    this.getFavouriteList();
    this.getRatedList();
    this.accountService.getTvWatchlist().subscribe(resp => {
      this.programList = resp.results;
    })

  }

  getRatedList() {
    this.accountService.getRatedPrograms().subscribe(resp => {
      this.ratedList = resp.results});
  }

  getFavouriteList() {
    this.accountService.getFavoritePrograms().subscribe(resp => {
      this.favouriteList = resp.results});
  }

}
