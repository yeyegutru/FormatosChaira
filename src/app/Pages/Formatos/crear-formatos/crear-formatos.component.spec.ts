import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormatosComponent } from './crear-formatos.component';

describe('CrearFormatosComponent', () => {
  let component: CrearFormatosComponent;
  let fixture: ComponentFixture<CrearFormatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearFormatosComponent]
    });
    fixture = TestBed.createComponent(CrearFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
