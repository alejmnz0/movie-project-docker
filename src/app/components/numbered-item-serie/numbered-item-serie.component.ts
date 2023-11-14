import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numbered-item-serie',
  templateUrl: './numbered-item-serie.component.html',
  styleUrls: ['./numbered-item-serie.component.css']
})
export class NumberedItemSerieComponent {

  @Input() program: any;
  @Input() index!: number;
  suspenseId = 53;
  numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  getImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.program.poster_path
  }

  getPorcentaje(numero: number) {

    return numero * 10
  }
}
