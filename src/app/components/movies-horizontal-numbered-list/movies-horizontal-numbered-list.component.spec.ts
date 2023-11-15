import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHorizontalNumberedListComponent } from './movies-horizontal-numbered-list.component';

describe('MoviesHorizontalNumberedListComponent', () => {
  let component: MoviesHorizontalNumberedListComponent;
  let fixture: ComponentFixture<MoviesHorizontalNumberedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesHorizontalNumberedListComponent]
    });
    fixture = TestBed.createComponent(MoviesHorizontalNumberedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
