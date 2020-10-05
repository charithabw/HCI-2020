import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarHomeComponent } from './sellar-home.component';

describe('SellarHomeComponent', () => {
  let component: SellarHomeComponent;
  let fixture: ComponentFixture<SellarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellarHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
