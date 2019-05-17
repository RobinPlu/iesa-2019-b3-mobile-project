import { TestBed } from '@angular/core/testing';

import { GlobalisationService } from './globalisation.service';

describe('GlobalisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalisationService = TestBed.get(GlobalisationService);
    expect(service).toBeTruthy();
  });
});
