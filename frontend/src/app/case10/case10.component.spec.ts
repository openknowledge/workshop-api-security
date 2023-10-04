import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case10Component } from './case10.component';

describe('Case10Component', () => {
  let component: Case10Component;
  let fixture: ComponentFixture<Case10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Case10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
