import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberedItemComponent } from './numbered-item.component';

describe('NumberedItemComponent', () => {
  let component: NumberedItemComponent;
  let fixture: ComponentFixture<NumberedItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberedItemComponent]
    });
    fixture = TestBed.createComponent(NumberedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
