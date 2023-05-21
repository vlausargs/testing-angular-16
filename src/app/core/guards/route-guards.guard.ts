import { CanActivateFn } from '@angular/router';

export const RouteGuardsGuard: CanActivateFn = (route, state) => {
  const currentPath = route.routeConfig?.path || '';
  const dbPath = ['dashboard', 'products'];
  if (dbPath.indexOf(currentPath) === -1) {
    return false;
  }
  return true;
};
