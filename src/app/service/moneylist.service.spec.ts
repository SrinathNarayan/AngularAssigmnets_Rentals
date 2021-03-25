import { TestBed } from '@angular/core/testing';

import { MoneylistService } from './moneylist.service';

describe('MoneylistService', () => {
  let service: MoneylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
