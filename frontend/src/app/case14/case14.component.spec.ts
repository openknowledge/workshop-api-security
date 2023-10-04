import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case14Component } from './case14.component';

describe('Case14Component', () => {
  let component: Case14Component;
  let fixture: ComponentFixture<Case14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
