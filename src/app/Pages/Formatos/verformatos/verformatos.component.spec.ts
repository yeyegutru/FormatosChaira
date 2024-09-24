import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerformatosComponent } from './verformatos.component';

describe('VerformatosComponent', () => {
  let component: VerformatosComponent;
  let fixture: ComponentFixture<VerformatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerformatosComponent]
    });
    fixture = TestBed.createComponent(VerformatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
