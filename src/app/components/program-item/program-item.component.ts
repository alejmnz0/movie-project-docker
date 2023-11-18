import { Component, Input, OnInit } from '@angular/core';
import { Program } from 'src/app/models/program-list.interface';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-program-item',
  templateUrl: './program-item.component.html',
  styleUrls: ['./program-item.component.css']
})
export class ProgramItemComponent {

  @Input() program: any;
  @Input() rate!: any;
  longitudMaxima: number = 23;
  favouritePrograms: Program[] = [];
  @Input() isFav: any;

  constructor(private accountService: AccountService) { }

  toggleFavourite(): void {
    if (this.isFav) {
      this.accountService.removeProgramFromFavourites(this.program).subscribe(resp => {
        this.isFav = false;
      });
    } else {
      this.accountService.addProgramToFavourites(this.program).subscribe(resp => {
        this.isFav = true;
      });
    }
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


  getImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.program.poster_path
  }

  doRate() {
    this.accountService.rateProgram(this.program.id, (this.rate * 2)).subscribe(resp => {

    });
  }
  
}
