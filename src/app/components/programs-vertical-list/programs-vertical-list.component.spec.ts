import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsVerticalListComponent } from './programs-vertical-list.component';

describe('ProgramsVerticalListComponent', () => {
  let component: ProgramsVerticalListComponent;
  let fixture: ComponentFixture<ProgramsVerticalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramsVerticalListComponent]
    });
    fixture = TestBed.createComponent(ProgramsVerticalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
