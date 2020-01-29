import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule} from '../app-routing.module';
import { HomeRoutingModule } from './Home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import {LoginComponent} from '../Home/signin/login/login.component';
import {SignupComponent} from '../Home/signin/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ViewprofileComponent } from './profile/viewprofile/viewprofile.component';
import { SignoutComponent } from './profile/signout/signout.component';
import { SigninComponent } from './signin/signin.component';
import { BookingDetailsComponent } from './profile/booking-details/booking-details.component';
import {MaterialModule} from '../material-module';
import {EditprofileComponent} from  './profile/editprofile/editprofile.component';
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ViewprofileComponent,
    SignoutComponent,
    SigninComponent,
    BookingDetailsComponent,
    EditprofileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MaterialModule,
    HomeRoutingModule,
    AppRoutingModule
  ],
  providers:[]
})
export class HomeModule { }
