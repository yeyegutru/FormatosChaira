import { TestBed } from '@angular/core/testing';

import { ModalFuncionService } from './modal-funcion.service';

describe('ModalFuncionService', () => {
  let service: ModalFuncionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalFuncionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
