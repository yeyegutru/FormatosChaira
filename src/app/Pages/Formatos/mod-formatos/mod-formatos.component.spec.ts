import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModFormatosComponent } from './mod-formatos.component';

describe('ModFormatosComponent', () => {
  let component: ModFormatosComponent;
  let fixture: ComponentFixture<ModFormatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModFormatosComponent]
    });
    fixture = TestBed.createComponent(ModFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
