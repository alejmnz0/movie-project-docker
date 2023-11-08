import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProgramsComponent } from './filter-programs.component';

describe('FilterProgramsComponent', () => {
  let component: FilterProgramsComponent;
  let fixture: ComponentFixture<FilterProgramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterProgramsComponent]
    });
    fixture = TestBed.createComponent(FilterProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
