import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFavouriteProgramsComponent } from './page-favourite-programs.component';

describe('PageFavouriteProgramsComponent', () => {
  let component: PageFavouriteProgramsComponent;
  let fixture: ComponentFixture<PageFavouriteProgramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFavouriteProgramsComponent]
    });
    fixture = TestBed.createComponent(PageFavouriteProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
