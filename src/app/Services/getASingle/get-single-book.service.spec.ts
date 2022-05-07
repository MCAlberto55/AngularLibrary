import { TestBed } from '@angular/core/testing';

import { GetSingleBookService } from './get-single-book.service';

describe('GetSingleBookService', () => {
  let service: GetSingleBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSingleBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
