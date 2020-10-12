import { TestBed } from '@angular/core/testing';

import { NavBarDataService } from './nav-bar-data.service';

describe('NavBarDataService', () => {
  let service: NavBarDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavBarDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
