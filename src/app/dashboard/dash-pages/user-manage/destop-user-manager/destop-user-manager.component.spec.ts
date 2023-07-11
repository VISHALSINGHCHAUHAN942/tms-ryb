import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestopUserManagerComponent } from './destop-user-manager.component';

describe('DestopUserManagerComponent', () => {
  let component: DestopUserManagerComponent;
  let fixture: ComponentFixture<DestopUserManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestopUserManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestopUserManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
