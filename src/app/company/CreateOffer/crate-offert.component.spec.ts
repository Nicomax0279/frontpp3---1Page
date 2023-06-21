import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateOffertComponent } from './crate-offert.component';

describe('CrateOffertComponent', () => {
  let component: CrateOffertComponent;
  let fixture: ComponentFixture<CrateOffertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateOffertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrateOffertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
