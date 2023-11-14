import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-programs-vertical-list',
  templateUrl: './programs-vertical-list.component.html',
  styleUrls: ['./programs-vertical-list.component.css']
})
export class ProgramsVerticalListComponent {
  @Input() objectList: any;

}
