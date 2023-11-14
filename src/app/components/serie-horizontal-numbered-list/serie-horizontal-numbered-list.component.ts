import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-serie-horizontal-numbered-list',
  templateUrl: './serie-horizontal-numbered-list.component.html',
  styleUrls: ['./serie-horizontal-numbered-list.component.css']
})
export class SerieHorizontalNumberedListComponent {
  @Input() programList: any;
  arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
