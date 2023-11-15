import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieHorizontalNumberedListComponent } from './serie-horizontal-numbered-list.component';

describe('SerieHorizontalNumberedListComponent', () => {
  let component: SerieHorizontalNumberedListComponent;
  let fixture: ComponentFixture<SerieHorizontalNumberedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerieHorizontalNumberedListComponent]
    });
    fixture = TestBed.createComponent(SerieHorizontalNumberedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
