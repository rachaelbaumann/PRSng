import { TestBed } from '@angular/core/testing';

import { LineItemsService } from './line-items.service';

describe('LineItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineItemsService = TestBed.get(LineItemsService);
    expect(service).toBeTruthy();
  });
});
