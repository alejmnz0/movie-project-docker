import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsVerticalListComponent } from './actors-vertical-list.component';

describe('ActorsVerticalListComponent', () => {
  let component: ActorsVerticalListComponent;
  let fixture: ComponentFixture<ActorsVerticalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsVerticalListComponent]
    });
    fixture = TestBed.createComponent(ActorsVerticalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
