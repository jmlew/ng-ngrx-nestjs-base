import { TestBed } from '@angular/core/testing';

import { UserStoreFacadeService } from './user-store-facade.service';

describe('UserFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserStoreFacadeService = TestBed.get(UserStoreFacadeService);
    expect(service).toBeTruthy();
  });
});
