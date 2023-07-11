import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultipleDevicesComponent } from './add-multiple-devices.component';

describe('AddMultipleDevicesComponent', () => {
  let component: AddMultipleDevicesComponent;
  let fixture: ComponentFixture<AddMultipleDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMultipleDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMultipleDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
