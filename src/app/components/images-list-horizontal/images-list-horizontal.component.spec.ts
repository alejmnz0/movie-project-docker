import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesListHorizontalComponent } from './images-list-horizontal.component';

describe('ImagesListHorizontalComponent', () => {
  let component: ImagesListHorizontalComponent;
  let fixture: ComponentFixture<ImagesListHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesListHorizontalComponent]
    });
    fixture = TestBed.createComponent(ImagesListHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
