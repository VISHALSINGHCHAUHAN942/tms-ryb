import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMobileComponent } from './device-mobile.component';

describe('DeviceMobileComponent', () => {
  let component: DeviceMobileComponent;
  let fixture: ComponentFixture<DeviceMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
