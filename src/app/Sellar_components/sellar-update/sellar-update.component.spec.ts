import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarUpdateComponent } from './sellar-update.component';

describe('SellarUpdateComponent', () => {
  let component: SellarUpdateComponent;
  let fixture: ComponentFixture<SellarUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellarUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
