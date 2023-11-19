import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  @Input() isOnWatchList: any;
  longitudMaxima: number = 23;
  favouritePrograms: Program[] = [];
  @Input() isFav: any;

  constructor(private accountService: AccountService, private snackBar: MatSnackBar) { }

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

  toggleWatchlist(): void {
    if (this.isOnWatchList) {
      debugger
      this.accountService.removeTvFromWatchlist(this.program.id).subscribe(resp => {
        this.isOnWatchList = false;
        this.openSnackBar1();
      });
    } else {
      debugger
      this.accountService.addTvToWatchlist(this.program.id).subscribe(resp => {
        this.isOnWatchList = true;
        this.openSnackBar2();
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

  openSnackBar1() {
    this.snackBar.open("Se ha eliminado de la watch list con exito", "close", {duration: 5000, horizontalPosition: "left", verticalPosition: "bottom"});
  }

  openSnackBar2() {
    this.snackBar.open("Se ha añadido a la watch list con exito", "close", {duration: 5000, horizontalPosition: "left", verticalPosition: "bottom"});
  }
  
}
