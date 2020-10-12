import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarMyBooksComponent } from './sellar-my-books.component';

describe('SellarMyBooksComponent', () => {
  let component: SellarMyBooksComponent;
  let fixture: ComponentFixture<SellarMyBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellarMyBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellarMyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
