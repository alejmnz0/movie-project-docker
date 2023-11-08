import { Component, TemplateRef } from '@angular/core';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private modalService: NgbOffcanvas) { }

  openNoKeyboard(template: any) {
    this.modalService.open(template, {
      scroll: true
    });
  }
}
