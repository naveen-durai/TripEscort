import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { HomeComponent } from './Home/Home.component';
import { HomeModule } from './Home/Home.module';
import { LoginModule } from './Home/signin/login/login.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SignupRoutingModule } from './Home/signin/signup/signup-routing.module';
import {Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewprofileComponent } from './Home/profile/viewprofile/viewprofile.component';
import { BookingDetailsComponent } from './Home/profile/booking-details/booking-details.component';
import { SignoutComponent } from './Home/profile/signout/signout.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';
import { EditprofileComponent } from './Home/profile/editprofile/editprofile.component';
import { FeedbackComponent } from './Feedback/feedback.component';
import { TourComponent } from './tour/tour.component';
import { AdmintourComponent } from './admintour/admintour.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CabComponent } from './cab/cab.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { ErrorInterceptor } from './error-interceptor/error-interceptor.service';
import { ErrorInterceptorComponent } from './error-interceptor/error-interceptor.component';
import { GaurdRoute } from './router-gaurd';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackComponent,
    PageNotFoundComponent,
    TourComponent,
    AdmintourComponent,
    CabComponent,
    MapComponent,
    ErrorInterceptorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    Ng2OrderModule,
    HomeModule,
    AppRoutingModule,
    LoginModule,
    SignupRoutingModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  }),
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDAKXDDTEmK1ow-Q7LDOYstcddKivkP0ng'
  })
  ],
  providers: [
    Title,GaurdRoute,
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
  entryComponents:[ViewprofileComponent,BookingDetailsComponent,SignoutComponent,EditprofileComponent,ErrorInterceptorComponent]
})
export class AppModule { }
