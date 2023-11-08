import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRatedProgramsComponent } from './best-rated-programs.component';

describe('BestRatedProgramsComponent', () => {
  let component: BestRatedProgramsComponent;
  let fixture: ComponentFixture<BestRatedProgramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestRatedProgramsComponent]
    });
    fixture = TestBed.createComponent(BestRatedProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
