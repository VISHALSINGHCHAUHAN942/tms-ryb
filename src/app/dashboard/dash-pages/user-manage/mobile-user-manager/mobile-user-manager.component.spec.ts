import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileUserManagerComponent } from './mobile-user-manager.component';

describe('MobileUserManagerComponent', () => {
  let component: MobileUserManagerComponent;
  let fixture: ComponentFixture<MobileUserManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileUserManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileUserManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
