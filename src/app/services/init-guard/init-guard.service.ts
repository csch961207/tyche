import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';


@Injectable({
  providedIn: 'root',
})
export class InitGuardService implements CanActivate {
  constructor(
    private store: LocalStorageService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const init = !!this.store.getToken();

    if (state.url.includes('login') && init) {
      this.router.navigateByUrl('/main');
      return false;
    }
    if (!state.url.includes('login') && !init) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
}
