import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  longitudMaxima : number = 23;

  getPorcentaje(numero: number) {
    return numero * 10
  }

  acortarTitulo(titulo: string){
    if (titulo.length > this.longitudMaxima) {
      return titulo.substring(0, this.longitudMaxima
        ) + '...';
    } else {
        return titulo;
    }
    
  }
}
