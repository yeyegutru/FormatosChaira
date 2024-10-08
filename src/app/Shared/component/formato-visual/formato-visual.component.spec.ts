import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoVisualComponent } from './formato-visual.component';

describe('FormatoVisualComponent', () => {
  let component: FormatoVisualComponent;
  let fixture: ComponentFixture<FormatoVisualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormatoVisualComponent]
    });
    fixture = TestBed.createComponent(FormatoVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
