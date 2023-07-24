/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AccessTokenService } from '../access-token/accessToken.service';

describe('Service: AccessToken', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessTokenService]
    });
  });

  it('should ...', inject([AccessTokenService], (service: AccessTokenService) => {
    expect(service).toBeTruthy();
  }));
});
