import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSeasonProgramComponent } from './last-season-program.component';

describe('LastSeasonProgramComponent', () => {
  let component: LastSeasonProgramComponent;
  let fixture: ComponentFixture<LastSeasonProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastSeasonProgramComponent]
    });
    fixture = TestBed.createComponent(LastSeasonProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
