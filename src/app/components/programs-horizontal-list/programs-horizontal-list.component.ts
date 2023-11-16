import { Component, Input } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';

@Component({
  selector: 'app-programs-horizontal-list',
  templateUrl: './programs-horizontal-list.component.html',
  styleUrls: ['./programs-horizontal-list.component.css']
})
export class ProgramsHorizontalListComponent {
  @Input() favList!: Program[];
  @Input() programList!: Program[];

  isFav(programId: number) {
    return this.favList.some(resp => resp.id === programId);
  }
}
