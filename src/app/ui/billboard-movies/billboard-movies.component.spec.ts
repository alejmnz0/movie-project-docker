import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardMoviesComponent } from './billboard-movies.component';

describe('BillboardMoviesComponent', () => {
  let component: BillboardMoviesComponent;
  let fixture: ComponentFixture<BillboardMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillboardMoviesComponent]
    });
    fixture = TestBed.createComponent(BillboardMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
