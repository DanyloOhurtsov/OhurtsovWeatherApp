import { TestBed } from '@angular/core/testing';

import { GetDataFromServerService } from './get-data-from-server.service';

describe('GetDataFromServerService', () => {
  let service: GetDataFromServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataFromServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
