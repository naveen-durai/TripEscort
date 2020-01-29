import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signin/signup/signup.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewprofileComponent } from './profile/viewprofile/viewprofile.component';
import { SignoutComponent } from './profile/signout/signout.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './signin/login/login.component';
import { GaurdRoute } from '../router-gaurd';
const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent },
  { path: 'editprofile',component: EditprofileComponent,canActivate:[GaurdRoute]},
  { path: 'profile', component: ProfileComponent,canActivate:[GaurdRoute]},
  { path: 'viewprofile', component: ViewprofileComponent,canActivate:[GaurdRoute] },
  { path: 'signout', component: SignoutComponent},
  { path:'signin',component:SigninComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
