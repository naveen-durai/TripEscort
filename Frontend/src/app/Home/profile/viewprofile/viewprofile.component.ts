import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { profile } from 'src/app/class/profile';
import { $$ } from 'protractor';
import { TouristService } from 'src/Service/tourist.service';
import { Profileimage } from 'src/app/class/profileimage';
import { SigninService } from '../../signin/signin.service';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  details:any;
  pfimg:any;
  profile:profile=new profile();
  profile1:profile[];
  changepage:number=1;
  editprof: number=0;
  pi:Profileimage=new Profileimage();
  constructor(private _formBuilder: FormBuilder,private dialogref:MatDialogRef<ViewprofileComponent>,private touristservice:TouristService,private siginser:SigninService) {
  }
  ngOnInit() {
    this.touristservice.getprofileList().subscribe(
      Response=>{this.profile1=Response,
        this.profile1.forEach((a)=>
        {
          if(a.email==this.profile.email)
          {
           this.profile=a;
          }
        }  
        )
      });
    this.profile.firstname=this.siginser.getAuth().username;
    this.profile.email=this.siginser.getAuth().email;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.touristservice.getprofileListimage(this.profile.email).subscribe(
      Response=>{
        if(Response!=null)
         this.pi=Response
      })
      if(new Date().toDateString()===this.profile.birthday.toDateString())
       this.profile.birthday=null;
  }
  vwpro()
  {
   this.changepage=0;
  }
  vwpro1()
  {
    this.changepage=1;
  }
  edtprof()
  {
    this.editprof=1;
  }
  chgval($event)
  {
    this.editprof=$event.val;
    if($event.profile!=null && $event.profileimg!=null)
    {
    this.profile=$event.profile;
    this.pi=$event.profileimg;
    }
  }
  close()
  {
    this.dialogref.close();
  }
}
