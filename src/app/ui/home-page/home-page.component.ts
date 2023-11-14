import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { Program } from 'src/app/models/program.interface';
import { MovieService } from 'src/app/service/movie-service';
import { ProgramService } from 'src/app/service/program.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  moviePopularList: Movie[] = []
  seriePopularList: Program[] = []
  suspenseMovieList: Movie[] = []
  mostrarAlert: boolean = true;
  suspenseId = 53;

  cerrarAlert(): void {
    this.mostrarAlert = false;
  }

  constructor(private movieService: MovieService, private programService: ProgramService) { }

  ngOnInit(): void {
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


}
