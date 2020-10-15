import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacySettingComponent } from './privacy-setting.component';

describe('PrivacySettingComponent', () => {
  let component: PrivacySettingComponent;
  let fixture: ComponentFixture<PrivacySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacySettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
