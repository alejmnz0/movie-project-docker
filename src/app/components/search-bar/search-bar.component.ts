import { Component } from '@angular/core';
import { MovieSearch } from 'src/app/models/search-movie.interfaz';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  busqueda: String = "";
  movieSearchList: MovieSearch[] = [];

  constructor(private movieService: MovieService) { }

  buscarPeliculas() {
    this.movieService.searchMovie(this.busqueda).subscribe(resp => {
      this.movieSearchList = resp.results;
      debugger
    })
  }

}
