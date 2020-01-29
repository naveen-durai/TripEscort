import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { FeedbackComponent } from './Feedback/feedback.component';
import { TourComponent } from './tour/tour.component';
import { HomeComponent } from './Home/Home.component';
import { AdmintourComponent } from './admintour/admintour.component';
import { CabComponent } from './cab/cab.component';
import { MapComponent } from './map/map.component';
import { GaurdRoute } from './router-gaurd';
const route: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'feedback', component:FeedbackComponent,canActivate:[GaurdRoute] },
  { path: 'tour', component:TourComponent },
  { path: 'cab', component:CabComponent,canActivate:[GaurdRoute] },
  {path:'admintour',component:AdmintourComponent},
  {path:'map',component:MapComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      route,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
