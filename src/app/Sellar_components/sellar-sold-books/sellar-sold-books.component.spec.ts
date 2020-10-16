import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarSoldBooksComponent } from './sellar-sold-books.component';

describe('SellarSoldBooksComponent', () => {
  let component: SellarSoldBooksComponent;
  let fixture: ComponentFixture<SellarSoldBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellarSoldBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellarSoldBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
