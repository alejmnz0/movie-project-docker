import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie-service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {

  constructor (private moviesService: MovieService) {}
  avatarUrl = localStorage.getItem('AVATAR_PATH');
  username = localStorage.getItem('USERNAME');
  movieRatedList: Movie[] = [];
  porcentaje= this.getMediaRatedMovies();

  ngOnInit(): void {
    this.moviesService.getRatedMovies().subscribe(resp =>{
      this.movieRatedList = resp.results;
    });
  }

  getMediaRatedMovies(): number {
    let votos: number = 0;
    let cantPelis: number = 0;
    console.log('hola')
    this.movieRatedList.forEach(movie =>{
      votos=+(movie.vote_average*10);
      cantPelis++
    });
    return votos/cantPelis;
  }
}
