import { TestBed } from '@angular/core/testing';

import { GetFolowersService } from './get-folowers.service';

describe('GetFolowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFolowersService = TestBed.get(GetFolowersService);
    expect(service).toBeTruthy();
  });
});
