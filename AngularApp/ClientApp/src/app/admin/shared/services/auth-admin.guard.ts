import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../../shared/services/auth.service";

@Injectable()
export class AuthAdminGuard implements CanActivate{
  constructor(
    private auth: AuthService,
    private router: Router
    ) {
  }


  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated() && this.auth.isAdmin()) {
      console.log('You are admin');
      return true
    } else {
      // this.auth.logout()
      this.router.navigate(['/admin','login'], {
        queryParams: {
          loginAgain: true
        }
      })
    }
  }
}
