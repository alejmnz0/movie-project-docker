import { Component } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
import { RatedProgram } from 'src/app/models/rated-program-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-best-rated-programs',
  templateUrl: './best-rated-programs.component.html',
  styleUrls: ['./best-rated-programs.component.css']
})
export class BestRatedProgramsComponent {

  programList: Program[] = [];
  favList: Program[] = [];
  ratedList: RatedProgram[] = [];
  count = 0;
  page = 1;
  selectedGenreId: number | null = null;
  pagesFavorites = 0;

  constructor(private programService: ProgramService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    if (this.selectedGenreId !== null && this.selectedGenreId !== -1) {
      this.loadPageForGenre();
    } else {
      this.loadPageForBestRatedPrograms();
    }
  }

  loadPageForBestRatedPrograms() {
    this.getRatedList();
    this.getFavouriteResults();
    this.programService.getRatedProgramList(this.page).subscribe((resp) => {
      this.programList = resp.results;
      if (resp.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = resp.total_results;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadPageForGenre() {
    this.getRatedList();
    this.getFavouriteResults();
    this.programService.getProgramsByGenreAndPage(this.selectedGenreId!, this.page).subscribe((resp) => {
      this.programList = resp.results;
      if (resp.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = resp.total_results;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  getFavouriteResults() {
    this.accountService.getFavoritePrograms().subscribe(resp => {
      this.pagesFavorites = resp.total_pages;
      if (this.pagesFavorites <= 1) {
        this.accountService.getFavoritePrograms().subscribe(resp => {
          this.favList = resp.results;
        });
      } else {
        for (let i = 1; i <= this.pagesFavorites; i++) {
          this.accountService.getFavoriteProgramsByPage(i).subscribe(resp => {
            this.favList = this.favList.concat(resp.results);
          })
        }
      }
    });
  }

  getRatedList() {
    this.accountService.getRatedPrograms().subscribe(resp => {
      this.ratedList = resp.results});
  }

  showAllPrograms(id: number) {
    this.selectedGenreId = id;
    this.page = 1;
    this.loadNewPage();
  }

  showProgramsByGenre(id: number) {
    this.selectedGenreId = id;
    this.page = 1;
    this.loadNewPage();
  }

}
