import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateStatusComponent } from './employee-update-status.component';

describe('EmployeeUpdateStatusComponent', () => {
  let component: EmployeeUpdateStatusComponent;
  let fixture: ComponentFixture<EmployeeUpdateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
