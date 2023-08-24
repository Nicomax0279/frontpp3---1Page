import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookInscriptionsComponent } from './look-inscriptions.component';

describe('LookInscriptionsComponent', () => {
  let component: LookInscriptionsComponent;
  let fixture: ComponentFixture<LookInscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookInscriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookInscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
