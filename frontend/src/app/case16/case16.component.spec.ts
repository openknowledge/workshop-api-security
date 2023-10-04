import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case16Component } from './case16.component';

describe('Case17Component', () => {
  let component: Case16Component;
  let fixture: ComponentFixture<Case16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
