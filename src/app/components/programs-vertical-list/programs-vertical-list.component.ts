import { Component, Input } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
import { RatedProgram } from 'src/app/models/rated-program-list.interface';

@Component({
  selector: 'app-programs-vertical-list',
  templateUrl: './programs-vertical-list.component.html',
  styleUrls: ['./programs-vertical-list.component.css']
})
export class ProgramsVerticalListComponent {
  @Input() objectList: any;
  @Input() favList!: Program[];
  @Input() ratedList!: RatedProgram[];
  @Input() watchList!: Program[];


  isFav(programId: number) {
    return this.favList.some(resp => resp.id === programId);
  }

  getRate(programId: number) {
    let rate = this.ratedList.find(resp => resp.id === programId)?.rating;
    return rate ? rate / 2 : null;
  }

  isOnWatchList(programId: number) {
    return this.watchList.some(resp => resp.id === programId);
  }
}
