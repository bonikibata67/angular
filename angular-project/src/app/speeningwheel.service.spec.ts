import { TestBed } from '@angular/core/testing';

import { SpeeningwheelService } from './speeningwheel.service';

describe('SpeeningwheelService', () => {
  let service: SpeeningwheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeeningwheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
