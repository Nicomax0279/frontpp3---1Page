import { ComponentFixture, TestBed } from '@angular/core/testing';

import { basicNavBarComponent } from './basic-nav-bar.component';

describe('InfoComponent', () => {
  let component: basicNavBarComponent;
  let fixture: ComponentFixture<basicNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ basicNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(basicNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
