import { TestBed } from '@angular/core/testing';

import { FetchuserdetailsService } from './fetchuserdetails.service';

describe('FetchuserdetailsService', () => {
  let service: FetchuserdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchuserdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
