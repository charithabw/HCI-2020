import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusComponentComponent } from './aboutus-component.component';

describe('AboutusComponentComponent', () => {
  let component: AboutusComponentComponent;
  let fixture: ComponentFixture<AboutusComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
