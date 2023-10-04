import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case8Component } from './case8.component';

describe('Case8Component', () => {
  let component: Case8Component;
  let fixture: ComponentFixture<Case8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
