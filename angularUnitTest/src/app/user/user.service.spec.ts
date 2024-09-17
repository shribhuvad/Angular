import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {

  let userService: UserService;

  beforeEach(() => {

    TestBed.configureTestingModule({
    });
    userService = TestBed.inject(UserService);

  });

  it('shoub be present', () => {
    expect(userService).toBeTruthy();
  });

  it('should get users', () => {

    userService.getUsers().subscribe(user => {
      expect(user.length).toBeGreaterThan(0);

    })
  });


});
