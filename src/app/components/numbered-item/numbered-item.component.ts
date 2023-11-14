import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-numbered-item',
  templateUrl: './numbered-item.component.html',
  styleUrls: ['./numbered-item.component.css']
})
export class NumberedItemComponent {

  @Input() movie: any;
  @Input() index!: number;
  numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  getImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
  }
}
