import { TestBed, inject } from '@angular/core/testing';

import { SecureModuleService } from './secure-module.service';

describe('SecureModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureModuleService]
    });
  });

  it('should be created', inject([SecureModuleService], (service: SecureModuleService) => {
    expect(service).toBeTruthy();
  }));
});
