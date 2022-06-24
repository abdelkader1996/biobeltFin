import { TestBed } from '@angular/core/testing';

import { MyGlobalServiceService } from './my-global-service.service';

describe('MyGlobalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyGlobalServiceService = TestBed.get(MyGlobalServiceService);
    expect(service).toBeTruthy();
  });
});
