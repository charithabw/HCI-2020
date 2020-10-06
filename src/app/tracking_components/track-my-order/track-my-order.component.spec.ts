import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMyOrderComponent } from './track-my-order.component';

describe('TrackMyOrderComponent', () => {
  let component: TrackMyOrderComponent;
  let fixture: ComponentFixture<TrackMyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackMyOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
