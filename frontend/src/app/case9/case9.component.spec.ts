import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case9Component } from './case9.component';

describe('Case9Component', () => {
  let component: Case9Component;
  let fixture: ComponentFixture<Case9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
