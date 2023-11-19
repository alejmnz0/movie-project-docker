import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-movie-horizontal-list',
  templateUrl: './movie-horizontal-list.component.html',
  styleUrls: ['./movie-horizontal-list.component.css']
})
export class MovieHorizontalListComponent {

  @Input() movieList!: Movie[];
  @Input() favList!: Movie[];
  @Input() ratedList!: RatedMovie[];
  @Input() watchList!: Movie[];

  isFav(movieId: number) {
    return this.favList.some(resp => resp.id === movieId);
  }

  getRate(movieId: number) {
    let rate = this.ratedList.find(resp => resp.id === movieId)?.rating;
    return rate ? rate / 2 : null;
  }

  isOnWatchList(movieId: number) {
    return this.watchList.some(resp => resp.id === movieId);
  }
}
