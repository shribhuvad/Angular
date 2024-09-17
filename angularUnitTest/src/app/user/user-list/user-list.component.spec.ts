import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    });
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, "getUsers").and.returnValue(of([

      { id: 1, name: "shri" },
      { id: 2, name: "shri2" }
    ]));

    //    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users from init', () => {
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  });

  it('should retrieve users service when refresh button click', () => {
    fixture.detectChanges(); //this will call ngoninit
    userServiceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('Button'));

    button.triggerEventHandler('click', null); 

    expect(userServiceSpy).toHaveBeenCalled();
  });



});
