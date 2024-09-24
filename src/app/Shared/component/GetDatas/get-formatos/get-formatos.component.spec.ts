import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFormatosComponent } from './get-formatos.component';

describe('GetFormatosComponent', () => {
  let component: GetFormatosComponent;
  let fixture: ComponentFixture<GetFormatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetFormatosComponent]
    });
    fixture = TestBed.createComponent(GetFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
