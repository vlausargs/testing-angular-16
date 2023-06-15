import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const expectedRole = next.data['role'];
    const jwt = this.authService.parseJwt(
      this.authService.authResponse.access_token
    );
    const currRole = jwt['authority'];

    const found =
      currRole.findIndex((role: any) => expectedRole.indexOf(role) !== -1) == 0;
    console.log(this.authService.isLoggedIn !== true);
    console.log(found);
    if (this.authService.isLoggedIn !== true || !found) {
      window.alert('Access Denied, Login is Required to Access This Page!');
      this.router.navigate(['login']);
    }
    return true;
  }
}
