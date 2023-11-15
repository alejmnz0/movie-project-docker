import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteProgramsProfileComponent } from './favorite-programs-profile.component';

describe('FavoriteProgramsProfileComponent', () => {
  let component: FavoriteProgramsProfileComponent;
  let fixture: ComponentFixture<FavoriteProgramsProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteProgramsProfileComponent]
    });
    fixture = TestBed.createComponent(FavoriteProgramsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
