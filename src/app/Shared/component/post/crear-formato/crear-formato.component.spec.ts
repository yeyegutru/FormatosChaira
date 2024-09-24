import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormatoComponent } from './crear-formato.component';

describe('CrearFormatoComponent', () => {
  let component: CrearFormatoComponent;
  let fixture: ComponentFixture<CrearFormatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearFormatoComponent]
    });
    fixture = TestBed.createComponent(CrearFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
