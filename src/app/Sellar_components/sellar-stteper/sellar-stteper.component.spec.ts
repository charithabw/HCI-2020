import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarStteperComponent } from './sellar-stteper.component';

describe('SellarStteperComponent', () => {
  let component: SellarStteperComponent;
  let fixture: ComponentFixture<SellarStteperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellarStteperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellarStteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
