import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMoviesProfileComponent } from './favorite-movies-profile.component';

describe('FavoriteMoviesProfileComponent', () => {
  let component: FavoriteMoviesProfileComponent;
  let fixture: ComponentFixture<FavoriteMoviesProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteMoviesProfileComponent]
    });
    fixture = TestBed.createComponent(FavoriteMoviesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
