import { CanActivateChildFn } from '@angular/router';

export const canActiGuard: CanActivateChildFn = (childRoute, state) => {
  return false;
};
