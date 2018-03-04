import { TestBed, inject } from '@angular/core/testing';

import { BusquedaUsuarioService } from './busqueda-usuario.service';

describe('BusquedaUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusquedaUsuarioService]
    });
  });

  it('should be created', inject([BusquedaUsuarioService], (service: BusquedaUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
