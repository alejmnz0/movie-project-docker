import { Component, Input } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';

@Component({
  selector: 'app-programs-vertical-list',
  templateUrl: './programs-vertical-list.component.html',
  styleUrls: ['./programs-vertical-list.component.css']
})
export class ProgramsVerticalListComponent {
  @Input() objectList: any;
  @Input() favList!: Program[]

  isFav(programId: number) {
    return this.favList.some(resp => resp.id === programId);
  }
}
