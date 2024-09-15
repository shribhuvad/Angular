import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationlistComponent } from './reservationlist.component';

describe('ReservationlistComponent', () => {
  let component: ReservationlistComponent;
  let fixture: ComponentFixture<ReservationlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationlistComponent]
    });
    fixture = TestBed.createComponent(ReservationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
