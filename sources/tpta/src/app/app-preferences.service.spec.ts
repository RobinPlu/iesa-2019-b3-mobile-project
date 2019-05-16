import { TestBed } from '@angular/core/testing';

import { AppPreferencesService } from './app-preferences.service';

describe('AppPreferencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppPreferencesService = TestBed.get(AppPreferencesService);
    expect(service).toBeTruthy();
  });
});
