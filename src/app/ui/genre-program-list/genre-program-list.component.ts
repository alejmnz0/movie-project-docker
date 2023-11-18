import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Program } from 'src/app/models/program-list.interface';
import { Genre } from 'src/app/models/program.interface';
import { GenreService } from 'src/app/service/genre-service';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-genre-program-list',
  templateUrl: './genre-program-list.component.html',
  styleUrls: ['./genre-program-list.component.css']
})
export class GenreProgramListComponent {
  count = 0;
  page = 1;
  genreId = 0;
  genreList: Genre[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  genre!: Genre;
  programList: Program[] = [];
  loaded = false;

  constructor(private sanitazer: DomSanitizer, private genreService: GenreService, private programService: ProgramService) {
    this.genreId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.genreService.getGenreProgramList().subscribe(resp => {
      this.genreList = resp.genres;
      this.genreList.forEach(resp => {
        if (resp.id === this.genreId) {
          this.genre = resp;
        }
      })
    })
    this.programService.getProgramsByGenreAndPage(this.genreId, this.page).subscribe((resp) => {
      this.programList = resp.results;
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
