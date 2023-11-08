import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProgramComponent } from './details-program.component';

describe('DetailsProgramComponent', () => {
  let component: DetailsProgramComponent;
  let fixture: ComponentFixture<DetailsProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsProgramComponent]
    });
    fixture = TestBed.createComponent(DetailsProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
