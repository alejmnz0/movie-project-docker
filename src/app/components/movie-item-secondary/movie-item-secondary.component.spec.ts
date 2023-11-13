import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemSecondaryComponent } from './movie-item-secondary.component';

describe('MovieItemSecondaryComponent', () => {
  let component: MovieItemSecondaryComponent;
  let fixture: ComponentFixture<MovieItemSecondaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieItemSecondaryComponent]
    });
    fixture = TestBed.createComponent(MovieItemSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
