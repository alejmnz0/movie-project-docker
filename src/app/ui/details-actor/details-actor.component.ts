import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ActorResponse } from 'src/app/models/actor.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { RatedMovie } from 'src/app/models/rated-movie-list.interface';
import { AccountService } from 'src/app/service/account.service';
import { ActorService } from 'src/app/service/actor-service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-details-actor',
  templateUrl: './details-actor.component.html',
  styleUrls: ['./details-actor.component.css']
})
export class DetailsActorComponent implements OnInit {

  actorId = 0;
  selectedActor!: ActorResponse;
  route: ActivatedRoute = inject(ActivatedRoute);
  movieList: Movie[] = [];
  favList: Movie[] = [];
  pagesWatchList= 0;
  ratedList: RatedMovie[] = [];
  watchList: Movie[] = [];
  pagesFavorites = 0;

  constructor(private actorService: ActorService, private accountService: AccountService, private sanitazer: DomSanitizer, private movieService: MovieService) {
    this.actorId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.actorService.getActorById(this.actorId).subscribe(resp => {
      this.selectedActor = resp;
    })
    this.movieService.getMoviesByActor(this.actorId).subscribe(resp => {
      this.movieList = resp.cast;
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getActorImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.selectedActor.profile_path
  }

  getGender() {
    if (this.selectedActor.gender == 1) {
      return "Femenino"
    } else {
      return "Masculino"
    }
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

  getRatedList() {
    this.accountService.getRatedMovies().subscribe(resp => {
      this.ratedList = resp.results});
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
