import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path:'navbar',
    component: NavbarComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
