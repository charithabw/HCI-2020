import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarPaymentsComponent } from './sellar-payments.component';

describe('SellarPaymentsComponent', () => {
  let component: SellarPaymentsComponent;
  let fixture: ComponentFixture<SellarPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellarPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellarPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
