import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarOrdersComponent } from './sellar-orders.component';

describe('SellarOrdersComponent', () => {
  let component: SellarOrdersComponent;
  let fixture: ComponentFixture<SellarOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellarOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellarOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
