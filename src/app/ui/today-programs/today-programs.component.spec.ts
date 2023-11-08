import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayProgramsComponent } from './today-programs.component';

describe('TodayProgramsComponent', () => {
  let component: TodayProgramsComponent;
  let fixture: ComponentFixture<TodayProgramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayProgramsComponent]
    });
    fixture = TestBed.createComponent(TodayProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
