import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-movies-vertical-list',
  templateUrl: './movies-vertical-list.component.html',
  styleUrls: ['./movies-vertical-list.component.css']
})
export class MoviesVerticalListComponent {

  @Input() objectList: any;
  @Input() favList!: Movie[];
  @Input() ratedList!: RatedMovie[];

  getRate(movieId: number){
    return this.ratedList.find(resp => resp.id === movieId)?.rating;
  }

  isFav(movieId: number) {
    return this.favList.some(resp => resp.id === movieId);
  }
}
