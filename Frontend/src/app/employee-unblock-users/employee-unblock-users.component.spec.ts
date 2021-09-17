import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUnblockUsersComponent } from './employee-unblock-users.component';

describe('EmployeeUnblockUsersComponent', () => {
  let component: EmployeeUnblockUsersComponent;
  let fixture: ComponentFixture<EmployeeUnblockUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUnblockUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUnblockUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
