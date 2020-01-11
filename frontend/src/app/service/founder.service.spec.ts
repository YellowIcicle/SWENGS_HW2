import { TestBed } from '@angular/core/testing';

import { FounderService } from './founder.service';

describe('FounderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FounderService = TestBed.get(FounderService);
    expect(service).toBeTruthy();
  });
});
