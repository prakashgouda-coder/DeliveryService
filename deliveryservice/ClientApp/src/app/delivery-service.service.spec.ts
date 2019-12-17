import { TestBed } from '@angular/core/testing';

import { DeliveryServiceService } from './delivery-service.service';

describe('DeliveryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryServiceService = TestBed.get(DeliveryServiceService);
    expect(service).toBeTruthy();
  });
});
