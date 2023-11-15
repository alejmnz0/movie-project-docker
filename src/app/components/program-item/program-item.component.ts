import { Component, Input, OnInit } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-program-item',
  templateUrl: './program-item.component.html',
  styleUrls: ['./program-item.component.css']
})
export class ProgramItemComponent implements OnInit {

  @Input() program: any;
  longitudMaxima: number = 23;
  favourite = false;
  favouritePrograms: Program[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.isFavourite();
  }

  isFavourite() {
    this.accountService.getFavoritePrograms().subscribe(resp => {
      this.favouritePrograms = resp.results;
      const foundProgram = this.favouritePrograms.find(programSelected => programSelected.id === this.program.id);
      this.favourite = foundProgram !== undefined;
    });

  }

  getPorcentaje(numero: number) {
    return numero * 10
  }

  acortarTitulo(titulo: string) {
    if (titulo.length > this.longitudMaxima) {
      return titulo.substring(0, this.longitudMaxima
      ) + '...';
    } else {
      return titulo;
    }

  }

  comprobarSiEsPeli(): boolean {
    return (this.program.title.size > 0)
  }

  getImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.program.poster_path
  }
}
