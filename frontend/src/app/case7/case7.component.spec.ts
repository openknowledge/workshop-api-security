import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case7Component } from './case7.component';

describe('Case7Component', () => {
  let component: Case7Component;
  let fixture: ComponentFixture<Case7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
