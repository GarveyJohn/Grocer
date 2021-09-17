import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateItemsComponent } from './user-update-items.component';

describe('UserUpdateItemsComponent', () => {
  let component: UserUpdateItemsComponent;
  let fixture: ComponentFixture<UserUpdateItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
