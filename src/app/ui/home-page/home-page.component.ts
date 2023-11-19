import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { Program } from 'src/app/models/program-list.interface';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { MovieService } from 'src/app/service/movie-service';
import { ProgramService } from 'src/app/service/program.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  moviePopularList: Movie[] = [];
  seriePopularList: Program[] = [];
  suspenseMovieList: Movie[] = [];
  favSuspenseMovieList: Movie[] = [];
  watchList: Movie[] = [];
  ratedList: RatedMovie[] = [];
  mostrarAlert: boolean = true;
  suspenseId = 53;
  pagesFavorites = 0;
  pagesRatedList= 0;
  pagesWatchList = 0;

  cerrarAlert(): void {
    this.mostrarAlert = false;
  }

  constructor(private movieService: MovieService, private accountService: AccountService, private programService: ProgramService) { }

  ngOnInit(): void {
    this.getWatchList();
    this.getRatedList();
    this.getFavouriteResults();
    this.movieService.getPopularMoviesList().subscribe(resp => {
      this.moviePopularList = resp.results.slice(0, 10);
    })
    this.programService.getPopularProgramList(1).subscribe(resp => {
      this.seriePopularList = resp.results.slice(0, 10);
    })
    this.movieService.getMoviesByGenreAndPage(this.suspenseId, 1).subscribe(resp => {
      this.suspenseMovieList = resp.results;
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getFavouriteResults() {
    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.pagesFavorites = resp.total_pages;
      if (this.pagesFavorites <= 1) {
        this.accountService.getFavoriteMovies().subscribe(resp => {
          this.favSuspenseMovieList = resp.results;
        });
      } else {
        for (let i = 1; i <= this.pagesFavorites; i++) {
          this.accountService.getFavoriteMoviesByPage(i).subscribe(resp => {
            this.favSuspenseMovieList = this.favSuspenseMovieList.concat(resp.results);
          })
        }
      }
    });
  }

  getRatedList() {
    this.accountService.getRatedMovies().subscribe(resp => {
      this.pagesRatedList = resp.total_pages;
      if (this.pagesRatedList <= 1) {
        this.accountService.getRatedMovies().subscribe(resp => {
          this.ratedList = resp.results;
        });
      } else {
        for (let i = 1; i <= this.pagesRatedList; i++) {
          this.accountService.getRatedMoviesByPage(i).subscribe(resp => {
            this.ratedList = this.ratedList.concat(resp.results);
          })
        }
      }
    });
  }

  getWatchList() {
    this.accountService.getMovieWatchlist().subscribe(resp => {
      this.pagesWatchList = resp.total_pages;
      if (this.pagesWatchList <= 1) {
        this.accountService.getMovieWatchlist().subscribe(resp => {
          this.watchList = resp.results;
        });
      } else {
        for (let i = 1; i <= this.pagesWatchList; i++) {
          this.accountService.getMovieWatchlistByPage(i).subscribe(resp => {
            this.watchList = this.watchList.concat(resp.results);
          })
        }
      }
    });
  }


}
