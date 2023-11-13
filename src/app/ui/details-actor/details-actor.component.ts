import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ActorResponse } from 'src/app/models/actor.interface';
import { Movie } from 'src/app/models/movie-list.interface';
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

  constructor(private actorService: ActorService, private sanitazer: DomSanitizer, private movieService: MovieService) {
    this.actorId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.actorService.getActorById(this.actorId).subscribe(resp => {
      this.selectedActor = resp;
    })
    this.movieService.getMoviesByActor(this.actorId).subscribe(resp => {
      this.movieList = resp.cast;
      debugger
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

}
