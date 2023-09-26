import { Component, OnInit } from '@angular/core';
import { authCodeFlowConfig } from '../config';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }


}
