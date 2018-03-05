import { TestBed, inject } from '@angular/core/testing';

import { ServicioajaxService } from './servicioajax.service';

describe('ServicioajaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioajaxService]
    });
  });

  it('should be created', inject([ServicioajaxService], (service: ServicioajaxService) => {
    expect(service).toBeTruthy();
  }));
});
