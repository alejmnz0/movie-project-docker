import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  moviePopularList: Movie[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMoviesList().subscribe(resp => {
      this.moviePopularList = resp.results;
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
