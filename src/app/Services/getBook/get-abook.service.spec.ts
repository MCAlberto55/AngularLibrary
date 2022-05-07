import { TestBed } from '@angular/core/testing';

import { GetABookService } from './get-abook.service';

describe('GetABookService', () => {
  let service: GetABookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetABookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
