import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

    name: string ="";

    constructor( private oauthService: OAuthService){

    }

    ngOnInit(): void {
      this.configureSingleSignOn();
      const userClaim: any=this.oauthService.getIdentityClaims();
      this.name=userClaim.name ? userClaim.name:null;
    }

    configureSingleSignOn(){
      this.oauthService.configure(authCodeFlowConfig)
      this.oauthService.tokenValidationHandler= new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }

    login(){
      this.oauthService.initCodeFlow();
    }

    logout(){
      this.oauthService.logOut();
    }

    get token(){
      let claims: any=this.oauthService.getIdentityClaims();
      return claims ? claims:null;
    }
}

