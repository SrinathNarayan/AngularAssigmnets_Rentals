import { TestBed } from '@angular/core/testing';

import { CurrencyconersionService } from './currencyconersion.service';

describe('CurrencyconersionService', () => {
  let service: CurrencyconersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyconersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
