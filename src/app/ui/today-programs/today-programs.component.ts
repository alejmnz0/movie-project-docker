import { Component } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-today-programs',
  templateUrl: './today-programs.component.html',
  styleUrls: ['./today-programs.component.css']
})
export class TodayProgramsComponent {

  programList: Program[] = [];
  favList: Program[] = [];
  count = 0;
  page = 1;
  selectedGenreId: number | null = null;
  pagesFavorites = 0;
  name: string = '';
  search = false;

  constructor(private programService: ProgramService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    if (this.name !== '') {
      this.search = true;
      this.programService.searchProgramByPage(this.name, this.page).subscribe(resp => {
        this.programList = resp.results;
        if (resp.total_results > 10000) {
          this.count = 10000;
        } else {
          this.count = resp.total_results;
        }
      });
    } else {
      this.search = false;

      if (this.selectedGenreId !== null && this.selectedGenreId !== -1) {
        this.loadPageForGenre();
      } else {
        this.loadPageForTodayPrograms();
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadPageForTodayPrograms() {
    this.getFavouriteResults()
    this.programService.getTodayProgramList(this.page).subscribe((resp) => {
      this.programList = resp.results;
      if (resp.total_results > 1000) {
        this.count = 10000;
      } else {
        this.count = resp.total_results;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadPageForGenre() {
    this.getFavouriteResults()
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

  loadPageByName(event: any) {
    this.name = event.target.value;

    if (this.name === '') {
      this.search = false;
      this.page = 1;
      this.loadNewPage();
    } else {
      this.search = true;
      this.programService.searchProgramByPage(event.target.value, this.page).subscribe(resp => {
        this.programList = resp.results;
        if (resp.total_results > 10000) {
          this.count = 10000;
        } else {
          this.count = resp.total_results;
        }
      });
    }
  }

}
