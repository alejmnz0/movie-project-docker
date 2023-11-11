import { Component, Input } from '@angular/core';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-movies-vertical-list',
  templateUrl: './movies-vertical-list.component.html',
  styleUrls: ['./movies-vertical-list.component.css']
})
export class MoviesVerticalListComponent {

  @Input() movieList: any;



}
