import { Component } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-best-rated-programs',
  templateUrl: './best-rated-programs.component.html',
  styleUrls: ['./best-rated-programs.component.css']
})
export class BestRatedProgramsComponent {

  programList: Program[] = [];

  count = 0;
  page = 1;
  selectedGenreId: number | null = null;

  constructor(private programService: ProgramService) { }

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
