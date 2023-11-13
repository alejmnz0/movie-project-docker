import { Component } from '@angular/core';
import { Program } from 'src/app/models/program.interface';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-today-programs',
  templateUrl: './today-programs.component.html',
  styleUrls: ['./today-programs.component.css']
})
export class TodayProgramsComponent {

  programList: Program[] = [];

  count = 0;
  page = 1;

  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.programService.getTodayProgramList(this.page).subscribe(resp => {
      this.programList = resp.results;
    })
  }

}
