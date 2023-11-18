import { Component, Input } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
@Component({
  selector: 'app-program-item-secondary',
  templateUrl: './program-item-secondary.component.html',
  styleUrls: ['./program-item-secondary.component.css']
})
export class ProgramItemSecondaryComponent {
  @Input() program!: Program;

  getProgramImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.program.poster_path
  }
}
