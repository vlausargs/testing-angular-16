import { CanActivateFn } from '@angular/router';

export const RoleGuardGuard: CanActivateFn = (route, state) => {
  const expectedRole = route.data['role'];

  // replace with jwt validation
  const token = localStorage.getItem('token');
  const jwtdata = JSON.parse(localStorage.getItem('roles') || '');
  const roles = jwtdata['roles'] as string[];
  console.log(jwtdata);
  if (
    !token ||
    roles.findIndex((role) => expectedRole.indexOf(role) !== -1) < 0
  ) {
    return false;
  }
  return true;
};
