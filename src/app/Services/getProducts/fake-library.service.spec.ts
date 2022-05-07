import { TestBed } from '@angular/core/testing';

import { FakeLibraryService } from './fake-library.service';

describe('FakeLibraryService', () => {
  let service: FakeLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
