import { TestBed } from '@angular/core/testing';

import { UnitconversionService } from './unitconversion.service';

describe('UnitconversionService', () => {
  let service: UnitconversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitconversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
