import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie-list.interface';
import { Genre } from 'src/app/models/movie.interface';
import { GenreService } from 'src/app/service/genre-service';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-genre-movie-list',
  templateUrl: './genre-movie-list.component.html',
  styleUrls: ['./genre-movie-list.component.css']
})
export class GenreMovieListComponent implements OnInit {
  count = 0;
  page = 1;
  genreId = 0;
  genreList: Genre[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  genre!: Genre;
  movieList: Movie[] = [];
  loaded = false;

  constructor(private sanitazer: DomSanitizer, private genreService: GenreService, private movieService: MovieService) {
    this.genreId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.genreService.getGenreList().subscribe(resp => {
      this.genreList = resp.genres;
      this.genreList.forEach(resp => {
        if (resp.id === this.genreId) {
          this.genre = resp;
        }
      })
    })
    this.movieService.getMoviesByGenreAndPage(this.genreId, this.page).subscribe((resp) => {
      this.movieList = resp.results;
      if (resp.total_results >= 10000) {
        this.count = 10000;
      } else {
        this.count = resp.total_results;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.loaded = true;
    });
  }


}
