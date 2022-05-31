import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckManagementComponent } from './check-management.component';

describe('CheckManagementComponent', () => {
  let component: CheckManagementComponent;
  let fixture: ComponentFixture<CheckManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
