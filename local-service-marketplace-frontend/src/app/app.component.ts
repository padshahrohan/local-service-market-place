import { Component } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Local Service Marketplace';
  // public isLoggedIn = false;
  // public userProfile: KeycloakProfile | null = null;

  // constructor(private readonly keycloak: KeycloakService,
  //   private readonly router: Router) {}

  // public async ngOnInit() {
  //   this.isLoggedIn = await this.keycloak.isLoggedIn();

  //   if (this.isLoggedIn) {
  //     console.log("Logged in")
  //     // this.userProfile = await this.keycloak.loadUserProfile();
  //     this.router.navigate(['landing']);
  //   }
  // }

  // public login() {
  //   console.log("Login Button Has Been Clicked")
  //   this.keycloak.login()
  //     .then(() => {
  //       console.log("inside login")
  //       // After successful login, navigate to the home route
  //       this.router.navigate(['landing']);
  //     })
  //     .catch(error => {
  //       console.error('Error during login:', error);
  //     });
  // }

  // public logout() {
  //   this.keycloak.logout();
  // }
}
