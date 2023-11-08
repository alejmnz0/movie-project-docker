import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonMoviesComponent } from './coming-soon-movies.component';

describe('ComingSoonMoviesComponent', () => {
  let component: ComingSoonMoviesComponent;
  let fixture: ComponentFixture<ComingSoonMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComingSoonMoviesComponent]
    });
    fixture = TestBed.createComponent(ComingSoonMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
