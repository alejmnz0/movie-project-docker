import { Component, TemplateRef, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cast } from 'src/app/models/credits-movie.interface';
import { Backdrop } from 'src/app/models/image-movie.interface';
import { Program } from 'src/app/models/program-list.interface';
import { Genre, ProgramResponse, Season } from 'src/app/models/program.interface';
import { RatedProgram } from 'src/app/models/rated-program-list.interface';
import { Video } from 'src/app/models/video-movie.interface';
import { AccountService } from 'src/app/service/account.service';
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
  watchList: Program[] = [];
  ratedList: RatedProgram[] = [];
  lastSeason!: Season;
  favourite = false;
  favouritePrograms: Program[] = [];
  pages: number = 0;
  pagesRated = 0;
  pagesWatchList = 0;
  rate = 0;
  isOnWatchList = false;

  constructor(private programService: ProgramService, private accountService: AccountService, private sanitazer: DomSanitizer, private modalService: NgbModal, private snackBar: MatSnackBar) {
    this.programId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.programService.getProgramById(this.programId).subscribe(resp => {
      this.selectedProgram = resp;
      this.seasons = resp.seasons;
      this.lastSeason = this.seasons[this.seasons.length - 1]
    })
    this.getTotalPagesFavorite();
    this.getTotalPagesRated();
    this.getTotalPagesWatchList();
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

  toggleFavourite(): void {
    if (this.favourite) {
      this.accountService.removeProgramFromFavourites(this.selectedProgram).subscribe(resp => {
        this.favourite = false;
      });
    } else {
      this.accountService.addProgramToFavourites(this.selectedProgram).subscribe(resp => {
        this.favourite = true;
      });
    }
  }

  getRate() {
    if (this.pagesRated <= 1) {
      this.accountService.getRatedPrograms().subscribe(resp => {
        this.ratedList = resp.results;
        let valor = this.ratedList.find(currentProgram => currentProgram.id === this.selectedProgram.id)?.rating ?? 0;
        this.rate = valor / 2;
      });
    } else {
      for (let i = 1; i <= this.pagesRated; i++) {
        this.accountService.getRatedProgramsByPage(i).subscribe(resp => {
          this.ratedList = this.ratedList.concat(resp.results);
          let valor = this.ratedList.find(currentProgram => currentProgram.id === this.selectedProgram.id)?.rating ?? 0;
          this.rate = valor / 2;
        });
      }
    }
  }

  getTotalPagesFavorite() {
    this.accountService.getFavoritePrograms().subscribe(resp => {
      this.pages = resp.total_pages;
      this.isFavourite();
    });
  }

  getTotalPagesRated() {
    this.accountService.getRatedPrograms().subscribe(resp => {
      this.pagesRated = resp.total_pages;
      this.getRate();
    });
  }

  getTotalPagesWatchList() {
    this.accountService.getTvWatchlist().subscribe(resp => {
      this.pagesWatchList = resp.total_pages;
      this.isWatchListed();
    });
  }

  isWatchListed() {
    if (this.pagesWatchList <= 1) {
      this.accountService.getTvWatchlist().subscribe(resp => {
        this.watchList = resp.results;
        const foundMovie = this.watchList.find(currentProgram => currentProgram.id === this.selectedProgram.id);
        this.isOnWatchList = foundMovie !== undefined;
      });
    } else {
      for (let i = 1; i <= this.pagesWatchList; i++) {
        this.accountService.getTvWatchlistByPage(i).subscribe(resp => {
          this.watchList = this.watchList.concat(resp.results);
          const foundMovie = this.watchList.find(currentProgram => currentProgram.id === this.selectedProgram.id);
          this.isOnWatchList = foundMovie !== undefined;
        });
      }
    }
  }

  toggleWatchlist(): void {
    if (this.isOnWatchList) {
      debugger
      this.accountService.removeTvFromWatchlist(this.selectedProgram.id).subscribe(resp => {
        this.isOnWatchList = false;
        this.openSnackBar1();
      });
    } else {
      this.accountService.removeTvFromWatchlist(this.selectedProgram.id).subscribe(resp => {
        this.isOnWatchList = true;
        this.openSnackBar2();
      });
    }
  }

  openSnackBar1() {
    this.snackBar.open("Se ha añadido a la watchlist con éxito", "Cerrar", { duration: 5000, horizontalPosition: "left", verticalPosition: "bottom" });
  }

  openSnackBar2() {
    this.snackBar.open("Se ha añadido a la watchlist con éxito", "Cerrar", { duration: 5000, horizontalPosition: "left", verticalPosition: "bottom" });
  }

  doRate() {
    this.accountService.rateProgram(this.programId, (this.rate * 2)).subscribe(resp => {
    });
  }


  isFavourite() {
    if (this.pages <= 1) {
      this.accountService.getFavoritePrograms().subscribe(resp => {
        this.favouritePrograms = resp.results;
        const foundMovie = this.favouritePrograms.find(currentProgram => currentProgram.id === this.selectedProgram.id);
        this.favourite = foundMovie !== undefined;
      });
    } else {
      for (let i = 1; i <= this.pages; i++) {
        this.accountService.getFavoriteProgramsByPage(i).subscribe(resp => {
          this.favouritePrograms = this.favouritePrograms.concat(resp.results);
          const foundMovie = this.favouritePrograms.find(currentProgram => currentProgram.id === this.selectedProgram.id);
          this.favourite = foundMovie !== undefined;
        });
      }
    }
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
    return "https://image.tmdb.org/t/p/original/" + this.selectedProgram.backdrop_path
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

