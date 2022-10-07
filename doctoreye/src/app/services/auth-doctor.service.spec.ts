import { TestBed } from '@angular/core/testing';

import { AuthDoctorService } from './auth-doctor.service';

describe('AuthDoctorService', () => {
  let service: AuthDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
