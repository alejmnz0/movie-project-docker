import { Component, TemplateRef } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed = true;

  constructor(private collapseService: NgbCollapse) { }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
