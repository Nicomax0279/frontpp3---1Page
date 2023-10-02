/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Snack2Component } from './snack2.component';

describe('Snack2Component', () => {
  let component: Snack2Component;
  let fixture: ComponentFixture<Snack2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Snack2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Snack2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
