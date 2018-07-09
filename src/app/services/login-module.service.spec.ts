import { TestBed, inject } from '@angular/core/testing';

import { LoginModuleService } from './login-module.service';

describe('LoginModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginModuleService]
    });
  });

  it('should be created', inject([LoginModuleService], (service: LoginModuleService) => {
    expect(service).toBeTruthy();
  }));
});
