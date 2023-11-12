import { Component } from '@angular/core';
import { Program } from 'src/app/models/program.interface';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-best-rated-programs',
  templateUrl: './best-rated-programs.component.html',
  styleUrls: ['./best-rated-programs.component.css']
})
export class BestRatedProgramsComponent {

  programList: Program[] = [];

  count = 1000;
  page = 1;

  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.programService.getRatedProgramList(this.page).subscribe(resp => {
      this.programList = resp.results;
    })
  }

}
