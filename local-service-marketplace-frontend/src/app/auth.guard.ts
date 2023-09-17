import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {

    const oauthService = inject(OAuthService);
    const router = inject(Router);
    // const router = inject(Router);
  
  var hasIdToken=oauthService.hasValidIdToken();
  var hasAccessToken=oauthService.hasValidAccessToken();

  if(hasIdToken && hasAccessToken){
    return true;
  }else{
    router.navigate(["/welcome"]);
    return false;
  } 


};
