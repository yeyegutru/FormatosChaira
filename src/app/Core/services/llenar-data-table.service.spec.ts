import { TestBed } from '@angular/core/testing';

import { LlenarDataTableService } from './llenar-data-table.service';

describe('LlenarDataTableService', () => {
  let service: LlenarDataTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlenarDataTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
