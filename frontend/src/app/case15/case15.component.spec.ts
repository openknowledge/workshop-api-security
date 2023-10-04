import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case15Component } from './case15.component';

describe('Case15Component', () => {
  let component: Case15Component;
  let fixture: ComponentFixture<Case15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
