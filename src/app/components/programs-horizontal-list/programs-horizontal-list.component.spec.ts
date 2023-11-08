import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsHorizontalListComponent } from './programs-horizontal-list.component';

describe('ProgramsHorizontalListComponent', () => {
  let component: ProgramsHorizontalListComponent;
  let fixture: ComponentFixture<ProgramsHorizontalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramsHorizontalListComponent]
    });
    fixture = TestBed.createComponent(ProgramsHorizontalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
