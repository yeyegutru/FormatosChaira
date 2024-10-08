import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearPasoComponent } from './formulario-crear-paso.component';

describe('FormularioCrearPasoComponent', () => {
  let component: FormularioCrearPasoComponent;
  let fixture: ComponentFixture<FormularioCrearPasoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCrearPasoComponent]
    });
    fixture = TestBed.createComponent(FormularioCrearPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
