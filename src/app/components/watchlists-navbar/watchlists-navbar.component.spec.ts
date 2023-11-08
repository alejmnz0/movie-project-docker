import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistsNavbarComponent } from './watchlists-navbar.component';

describe('WatchlistsNavbarComponent', () => {
  let component: WatchlistsNavbarComponent;
  let fixture: ComponentFixture<WatchlistsNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchlistsNavbarComponent]
    });
    fixture = TestBed.createComponent(WatchlistsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
