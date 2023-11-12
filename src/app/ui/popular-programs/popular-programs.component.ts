import { Component } from '@angular/core';
import { Program } from 'src/app/models/program.interface';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-popular-programs',
  templateUrl: './popular-programs.component.html',
  styleUrls: ['./popular-programs.component.css']
})
export class PopularProgramsComponent {

  movieList: Program[] = [];

  count = 10000;
  page = 1;

  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.programService.getPopularProgramList(this.page).subscribe(resp => {
      this.movieList = resp.results;
    })
  }
}
