import { Component, TemplateRef, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cast } from 'src/app/models/credits-movie.interface';
import { Backdrop } from 'src/app/models/image-movie.interface';
import { Genre, ProgramResponse, Season } from 'src/app/models/program.interface';
import { Video } from 'src/app/models/video-movie.interface';
import { MovieService } from 'src/app/service/movie-service';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-details-program',
  templateUrl: './details-program.component.html',
  styleUrls: ['./details-program.component.css']
})
export class DetailsProgramComponent {
  selectedProgram !: ProgramResponse;
  genreList: Genre[] = []
  programId = 0;
  route: ActivatedRoute = inject(ActivatedRoute);
  videoList: Video[] = [];
  imageList: Backdrop[] = [];
  actorList: Cast[] = [];
  seasons: Season[] = [];
  lastSeason!: Season;

  constructor(private programService: ProgramService, private sanitazer: DomSanitizer, private modalService: NgbModal) {
    this.programId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.programService.getProgramById(this.programId).subscribe(resp => {
      this.selectedProgram = resp;
      this.seasons = resp.seasons;
      this.lastSeason = this.seasons[this.seasons.length - 1]
    })
    this.programService.getVideosByMovie(this.programId).subscribe(resp => {
      this.videoList = resp.results;
    })
    this.programService.getImagesByMovie(this.programId).subscribe(resp => {
      this.imageList = resp.backdrops;
    })
    this.programService.getActorsByMovie(this.programId).subscribe(resp => {
      this.actorList = resp.cast
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getImageItem() {
    return "https://image.tmdb.org/t/p/w500/" + this.selectedProgram.poster_path
  }

  getSeasonImage(season: Season) {
    if (season.poster_path != null) {
      return "https://image.tmdb.org/t/p/w500/" + season.poster_path;
    }
    return this.getImageItem()
  }

  getBannerUrl() {
    return "https://image.tmdb.org/t/p/original/" + this.selectedProgram.poster_path
  }

  getYear(): string {
    if (this.selectedProgram.first_air_date.length >= 4) {
      return this.selectedProgram.first_air_date.substring(0, 4);
    } else {
      return this.selectedProgram.first_air_date;
    }
  }

  getVideoUrl(videoSelected: Video) {
    if (videoSelected.site == 'YouTube') {
      return this.sanitazer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoSelected.key);
    } else {
      return this.sanitazer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + videoSelected.key);
    }
  }

  countVideos() {
    return this.videoList.length;
  }

  getImagesMovieUrl(imageSelected: Backdrop) {
    return "https://image.tmdb.org/t/p/original/" + imageSelected.file_path;
  }

  countImages() {
    return this.imageList.length;
  }

  getActorImage(actor: Cast) {
    return "https://image.tmdb.org/t/p/w500/" + actor.profile_path
  }

  getPorcentaje(numero: number) {
    return numero * 10
  }

  getNumeroTemporadas() {
    return this.selectedProgram.seasons.length
  }

  open(modal: any) {
    this.modalService.open(modal, {
      keyboard: false,
      scrollable: true
    })
  }
}

