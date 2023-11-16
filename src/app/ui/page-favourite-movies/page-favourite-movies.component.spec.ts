import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFavouriteMoviesComponent } from './page-favourite-movies.component';

describe('PageFavouriteMoviesComponent', () => {
  let component: PageFavouriteMoviesComponent;
  let fixture: ComponentFixture<PageFavouriteMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFavouriteMoviesComponent]
    });
    fixture = TestBed.createComponent(PageFavouriteMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
