import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookOfferDialogComponent } from './look-offer-dialog.component';

describe('LookOfferDialogComponent', () => {
  let component: LookOfferDialogComponent;
  let fixture: ComponentFixture<LookOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookOfferDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
