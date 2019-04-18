import { TestBed } from '@angular/core/testing';

import { TabNameService } from './tab-name.service';

describe('TabNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabNameService = TestBed.get(TabNameService);
    expect(service).toBeTruthy();
  });
});
