import { Component, OnInit } from '@angular/core';
import { OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name: any;

  token: any;

  constructor(private router: Router, private keycloakService: KeycloakService) { }

  async ngOnInit() {
    let loggedIn = await this.keycloakService.isLoggedIn();
    if (loggedIn) {
      let token = await this.keycloakService.getToken();
      this.token = token;
      
      let user = await this.keycloakService.loadUserProfile();
      this.name=user.username;
   
    }
  }

  async login() {
    this.keycloakService.login();
  }

  async logout() {
    await this.keycloakService.logout().then(()=> {
      this.router.navigate(['welcome']);
    });
  }

}
