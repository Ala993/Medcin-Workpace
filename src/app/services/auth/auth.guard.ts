import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { StateStorageImplService } from './state-storage-impl.service';
import { UserAccountService } from './user-account.service';


@Injectable({
   providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userAccountService: UserAccountService) {


  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  
    
     const token = localStorage.getItem('authenticationToken') || sessionStorage.getItem('authenticationToken');
     const isAuthenticated = this.userAccountService.isAuthenticated();
     if (!token) {
        this.router.navigate(['/session/loginone'], { queryParams: { returnUrl: state.url } });
     }
     console.log(isAuthenticated);
     
     return isAuthenticated;
  }

}
