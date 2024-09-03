import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const teacherGuardGuard: CanActivateFn = (route, state) => {
  const user = inject(UserService);
  if (user.getMyRole() === 'teacher') {
    return true;
  } else {
    alert('Sorry, YOu dont have access to this route')
    return false;
  }
};
