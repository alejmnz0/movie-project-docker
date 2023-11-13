import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-movie-horizontal-list',
  templateUrl: './movie-horizontal-list.component.html',
  styleUrls: ['./movie-horizontal-list.component.css']
})
export class MovieHorizontalListComponent {

  @Input() movieList: any;
}
