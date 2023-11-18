import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchMovieListResponse } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  busqueda: String = "";
  movieSearchList!: SearchMovieListResponse;
  @Output() searchKeyUp = new EventEmitter<SearchMovieListResponse>
  @Input() page = 0;

  constructor(private movieService: MovieService) { }

  buscarPeliculas() {
    if (this.busqueda.trim() === '') {
      this.searchKeyUp.emit()
    } else {
      this.movieService.searchMovieByPage(this.busqueda, this.page).subscribe(resp => {
        this.movieSearchList = resp;
      })
      this.searchKeyUp.emit(this.movieSearchList);
    }

  }



}
