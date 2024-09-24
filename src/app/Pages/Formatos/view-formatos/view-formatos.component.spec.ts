import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormatosComponent } from './view-formatos.component';

describe('ViewFormatosComponent', () => {
  let component: ViewFormatosComponent;
  let fixture: ComponentFixture<ViewFormatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFormatosComponent]
    });
    fixture = TestBed.createComponent(ViewFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
