import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case13Component } from './case13.component';

describe('Case13Component', () => {
  let component: Case13Component;
  let fixture: ComponentFixture<Case13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
