import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInput, forkJoin } from 'rxjs';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { Movie, PopularMoviesListResponse, SearchMovieListResponse } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  movieList: Movie[] = [];
  favList: Movie[] = [];
  count = 0;
  page = 1;
  pagesFavorites = 0;
  selectedGenreId: number | null = null;
  request!: ObservableInput<any>;
  requests: Observable<PopularMoviesListResponse>[] = []
  search = false;
  name: string = '';

  constructor(private movieService: MovieService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    if (this.selectedGenreId !== null && this.selectedGenreId !== -1) {
      this.loadPageForGenre();
    } /*else if (this.name !== '') {
      this.movieService.searchMovieByPage(this.name, this.page).subscribe(resp => {
        this.movieList = resp.results;
        if (resp.total_results > 10000) {
          this.count = 10000;
        } else {
          this.count = resp.total_results;
        }
      })
    } */else {
      this.loadPageForPopularMovies();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadPageForPopularMovies() {
    this.search = false
    this.getFavouriteResults()
    this.movieService.getPopularMoviesByPage(this.page).subscribe(resp => {
      this.movieList = resp.results;
      if (resp.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = resp.total_results;
      }
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadPageForGenre() {
    this.search = false
    this.getFavouriteResults();
    this.movieService.getMoviesByGenreAndPage(this.selectedGenreId!, this.page).subscribe(resp => {
      this.movieList = resp.results;
      if (resp.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = resp.total_results;
      }
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getFavouriteResults() {
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.pagesFavorites = resp.total_pages;
      if (this.pagesFavorites <= 1) {
        this.accountService.getFavoriteMovies().subscribe(resp => {
          this.favList = resp.results;
        });
      } else {
        for (let i = 1; i <= this.pagesFavorites; i++) {
          this.accountService.getFavoriteMoviesByPage(i).subscribe(resp => {
            this.favList = this.favList.concat(resp.results);
          })
        }
      }
    });
  }

  showAllMovies(id: number) {
    this.search = false
    this.selectedGenreId = id;
    this.page = 1;
    this.loadNewPage();
  }

  showMoviesByGenre(id: number) {
    this.search = false
    this.selectedGenreId = id;
    this.page = 1;
    this.loadNewPage();
  }

  /*showSearchedMovies($event: SearchMovieListResponse) {
    if ($event) {
      this.search = true;
      this.movieList = $event.results;
      if ($event.total_results > 10000) {
        this.count = 10000;
      } else {
        this.count = $event.total_results;
      }
    } else {
      this.search = false;
      this.loadNewPage();
    }
  }*/

  loadPageByName(event: any) {
    this.name = event.target.value;
    if (this.name == '') {
      this.loadNewPage();
    } else {
      this.movieService.searchMovieByPage(event.target.value, this.page).subscribe(resp => {
        this.movieList = resp.results;
        if (resp.total_results > 10000) {
          this.count = 10000;
        } else {
          this.count = resp.total_results;
        }
      })
    }
  }



}
