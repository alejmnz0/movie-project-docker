import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-item',
  templateUrl: './program-item.component.html',
  styleUrls: ['./program-item.component.css']
})
export class ProgramItemComponent {

  @Input() program: any;
  longitudMaxima: number = 23;

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
