import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-horizontal-numbered-list',
  templateUrl: './movies-horizontal-numbered-list.component.html',
  styleUrls: ['./movies-horizontal-numbered-list.component.css']
})
export class MoviesHorizontalNumberedListComponent {
  @Input() list: any;
  arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
