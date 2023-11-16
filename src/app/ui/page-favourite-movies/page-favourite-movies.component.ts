import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Movie } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-page-favourite-movies',
  templateUrl: './page-favourite-movies.component.html',
  styleUrls: ['./page-favourite-movies.component.css']
})
export class PageFavouriteMoviesComponent implements OnInit {

  movieList: Movie[] = [];
  favList: Movie[] = [];
  count = 0;
  page = 1;

  constructor(private accountService: AccountService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage()
  }

  loadNewPage() {
    let requests = [
      this.accountService.getFavoriteMoviesByPage(this.page),
      this.accountService.getFavoriteMoviesByPage(this.page)
    ];

    forkJoin(requests).subscribe((respArray) => {
      let respMovies = respArray[0];
      let respFav = respArray[1];
      this.favList = respFav.results;

      this.movieList = respMovies.results;
      if (respMovies.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = respMovies.total_results;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


}
