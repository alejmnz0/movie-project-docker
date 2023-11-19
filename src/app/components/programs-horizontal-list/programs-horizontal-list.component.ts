import { Component, Input } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
import { RatedProgram } from 'src/app/models/rated-program-list.interface';

@Component({
  selector: 'app-programs-horizontal-list',
  templateUrl: './programs-horizontal-list.component.html',
  styleUrls: ['./programs-horizontal-list.component.css']
})
export class ProgramsHorizontalListComponent {
  @Input() favList!: Program[];
  @Input() programList!: Program[];
  @Input() ratedList!: RatedProgram[];
  @Input() watchList!: Program[];

  isFav(programId: number) {
    return this.favList.some(resp => resp.id === programId);
  }

  getRate(movieId: number) {
    let rate = this.ratedList.find(resp => resp.id === movieId)?.rating;
    return rate ? rate / 2 : null;
  }

  isOnWatchList(programId: number) {
    return this.watchList.some(resp => resp.id === programId);
  }
}
