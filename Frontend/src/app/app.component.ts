import { Component, OnInit } from '@angular/core';
import { TouristService } from '../Service/tourist.service';
import{Title} from '@angular/platform-browser';
import {MatDialog,MatDialogConfig,MatDialogRef} from '@angular/material';
import { ViewprofileComponent } from './Home/profile/viewprofile/viewprofile.component';
import { BookingDetailsComponent} from './Home/profile/booking-details/booking-details.component';
import {SignoutComponent} from './Home/profile/signout/signout.component';
import {Router, NavigationExtras} from '@angular/router';
import { SigninService } from './Home/signin/signin.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  titles:string="tripEscort";
  a:number=1;
  signoutref:MatDialogRef<SignoutComponent>;
  viewref:MatDialogRef<ViewprofileComponent>;
  bookingref:MatDialogRef<BookingDetailsComponent>;
  islogin:boolean;
  changecolor(no:number){  
    if((no<4 && this.a<4) || (no>3 && this.a>3))
    (document.querySelector('.clk'+this.a) as HTMLElement).style.color="white";
    (document.querySelector('.clk'+no) as HTMLElement).style.color="red";
    this.a=no;
  }
  constructor(private touristservice:TouristService,private signinservice:SigninService,private title:Title,private dialog:MatDialog,private router:Router){
  }
  ngOnInit() {
    this.signinservice.autoAuth();
    this.islogin=this.signinservice.isAuthenticated;
    this.signinservice.getTokenListener().subscribe((res)=>
    {
      this.islogin=res;
    })
  }
  public setTitle(title)
  {
    this.title.setTitle(title);
    this.titles=this.title.getTitle();
    console.log(this.titles);
  }
  dialogbox(a:string)
  {
    const matconfig=new MatDialogConfig();
    matconfig.disableClose=true;
    matconfig.autoFocus=true;
    if(a=='view')
    {
      matconfig.width="90%";
      matconfig.height="80%";
      this.viewref=this.dialog.open(ViewprofileComponent,matconfig);
    }
    if(a=='booking')
    {
       this.bookingref=this.dialog.open(BookingDetailsComponent,matconfig);
    }
    if(a=='signout')
    {
      matconfig.width="60%";
      this.signoutref=this.dialog.open(SignoutComponent,matconfig);
    }
  }
}
