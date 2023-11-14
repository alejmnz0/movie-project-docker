import { Component, EventEmitter, Output } from '@angular/core';
import { Genre } from 'src/app/models/genre-list.interface';
import { GenreService } from 'src/app/service/genre-service';

@Component({
  selector: 'app-filter-programs',
  templateUrl: './filter-programs.component.html',
  styleUrls: ['./filter-programs.component.css']
})
export class FilterProgramsComponent {
  genreList: Genre[] = [];
  @Output() genreClick = new EventEmitter<number>;
  @Output() allClick = new EventEmitter<number>;
  showFilters = false;
  selectedGenre: number = 0;
  defaultActive = true;

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getGenreProgramList().subscribe(resp => {
      this.genreList = resp.genres;
    })
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  viewGenre(genre: Genre) {
    this.selectedGenre = genre.id;
    this.defaultActive = false;
    this.genreClick.emit(genre.id);
  }

  viewAll() {
    this.selectedGenre = -1;
    this.allClick.emit(-1);
  }
}
