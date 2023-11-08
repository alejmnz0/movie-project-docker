import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosListHorizontalComponent } from './videos-list-horizontal.component';

describe('VideosListHorizontalComponent', () => {
  let component: VideosListHorizontalComponent;
  let fixture: ComponentFixture<VideosListHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosListHorizontalComponent]
    });
    fixture = TestBed.createComponent(VideosListHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
