import { TestBed } from '@angular/core/testing';

import { FeeTransactionService } from './fee-transaction.service';

describe('FeeTransactionService', () => {
  let service: FeeTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeeTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
