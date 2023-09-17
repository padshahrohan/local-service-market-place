import { Component, OnInit } from '@angular/core';
import { authCodeFlowConfig } from '../config';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string="";

  ngOnInit(): void {
    this.configureSingleSignOn();
    const userClaim: any=this.oauthService.getIdentityClaims();
    this.name=userClaim.name ? userClaim.name:null;
    // throw new Error('Method not implemented.');
  }

  constructor( private oauthService: OAuthService){

  }

  configureSingleSignOn(){
    this.oauthService.configure(authCodeFlowConfig)
    this.oauthService.tokenValidationHandler= new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  } 

}
