import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Program } from 'src/app/models/program-list.interface';
import { RatedProgram } from 'src/app/models/rated-program-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-page-watchlist-programs',
  templateUrl: './page-watchlist-programs.component.html',
  styleUrls: ['./page-watchlist-programs.component.css']
})
export class PageWatchlistProgramsComponent {

  programList: Program[] = [];
  favList: Program[] = [];
  ratedList: RatedProgram[] = [];
  watchList: Program[] = [];
  count = 0;
  page = 1;

  constructor(private accountService: AccountService, private programService: ProgramService) { }

  ngOnInit(): void {
    this.loadNewPage()
  }

  loadNewPage() {
    this.getFavouriteList();
    this.getRatedList();
    let requests = [
      this.accountService.getTvWatchlistByPage(this.page),
      this.accountService.getTvWatchlistByPage(this.page)
    ];

    forkJoin(requests).subscribe((respArray) => {
      let respMovies = respArray[0];
      let respFav = respArray[1];
      this.watchList = respFav.results;

      this.programList = respMovies.results;
      if (respMovies.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = respMovies.total_results;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  getRatedList() {
    this.accountService.getRatedPrograms().subscribe(resp => {
      this.ratedList = resp.results});
  }

  getFavouriteList() {
    this.accountService.getFavoritePrograms().subscribe(resp => {
      this.favList = resp.results});
  }


}
