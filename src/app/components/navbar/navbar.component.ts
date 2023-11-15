import { Component, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService) { }
  public isCollapsed = false;
  avatarUrl!: String | null;
  username!: String | null;
  longitudMaxima = 7;

  doLogin() {
    this.authService.getRequestToken().subscribe(resp => {
      localStorage.setItem('REQUEST_TOKEN', resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('REQUEST_TOKEN')}?redirect_to=http://localhost:4200/approved`;
      
    })
  }

  ComprobarLogin() {
      this.avatarUrl = localStorage.getItem('AVATAR_PATH');
      this.username = localStorage.getItem('USERNAME');
    return (localStorage.getItem("AVATAR_PATH") == null)
  }

  acortarnombre(nombre: string | null) {
    if (nombre!.length > this.longitudMaxima) {
      return nombre!.substring(0, this.longitudMaxima
      ) + '...';
    } else {
      return nombre;
    }

  }

  logOut(){
    localStorage.removeItem("AVATAR_PATH");
    localStorage.removeItem("SESSION_ID");
    localStorage.removeItem("USERNAME");
    window.location.reload();
  }

}
