import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesVerticalListComponent } from './movies-vertical-list.component';

describe('MoviesVerticalListComponent', () => {
  let component: MoviesVerticalListComponent;
  let fixture: ComponentFixture<MoviesVerticalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesVerticalListComponent]
    });
    fixture = TestBed.createComponent(MoviesVerticalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
