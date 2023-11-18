import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Program } from 'src/app/models/program-list.interface';
import { RatedProgram } from 'src/app/models/rated-program-list.interface';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-page-favourite-programs',
  templateUrl: './page-favourite-programs.component.html',
  styleUrls: ['./page-favourite-programs.component.css']
})
export class PageFavouriteProgramsComponent {
  programList: Program[] = [];
  favList: Program[] = [];
  ratedList: RatedProgram[] = [];
  count = 0;
  page = 1;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadNewPage()
  }

  loadNewPage() {
    this.getRatedList();
    let requests = [
      this.accountService.getFavoriteProgramsByPage(this.page),
      this.accountService.getFavoriteProgramsByPage(this.page)
    ];

    forkJoin(requests).subscribe((respArray) => {
      let respPrograms = respArray[0];
      let respFav = respArray[1];
      this.favList = respFav.results;

      this.programList = respPrograms.results;
      if (respPrograms.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = respPrograms.total_results;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  getRatedList() {
    this.accountService.getRatedPrograms().subscribe(resp => {
      this.ratedList = resp.results});
  }
}
