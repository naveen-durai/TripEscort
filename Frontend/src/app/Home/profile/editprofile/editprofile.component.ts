import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {profile} from 'src/app/class/profile';
import {signup} from 'src/app/class/signup';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { TouristService } from 'src/Service/tourist.service';
import { Profileimage } from 'src/app/class/profileimage';
import { EditProfile } from 'src/app/class/editprofile';
import { SigninService } from '../../signin/signin.service';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType:true}
  }]
})
export class EditprofileComponent implements OnInit {
  @Output() viewprof:EventEmitter<EditProfile>= new EventEmitter<EditProfile>();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thridFormGroup:FormGroup;
  profile:profile=new profile();
  profileimg:Profileimage=new Profileimage();
  edtprf:EditProfile=new EditProfile();
  profile1:profile[];
  signup:signup[];
  pfimg:any;
  count:number=1;
  imagepre:string=null;
  constructor(private _formBuilder: FormBuilder,private dialogref:MatDialogRef<EditprofileComponent>,private touristservice:TouristService,private siginser:SigninService) {
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
      'firnameCtrl' : new FormControl(this.profile.firstname, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      'lasnameCtrl' : new FormControl(this.profile.lastname,[
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ]),
      'birCtrl' : new FormControl(this.profile.birthday, [
        Validators.required,
      ]),
      'emailCtrl' : new FormControl(this.profile.email, [
      ]),
      'mobCtrl' : new FormControl(this.profile.mobileno,[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
        Validators.pattern('^[0-9]+$')
      ]),
    });
    this.secondFormGroup = this._formBuilder.group({
      'hnoCtrl' : new FormControl(this.profile.houseno, [
        Validators.required,
      ]),
      'cityCtrl' : new FormControl(this.profile.city, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      'countryCtrl' : new FormControl(this.profile.country, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      'pnoCtrl' : new FormControl(this.profile.postcode, [
        Validators.required,
      ]),
    });
    this.touristservice.getprofileListimage(this.profile.email).subscribe(
      Response=>{
        if(Response!=null)
        {
        this.profileimg=Response,
        this.imagepre=this.profileimg.image
        }
      })
  }
  filechanged(event)
  {
     this.pfimg=event.target.files[0];
     const reader=new FileReader();
     reader.onload=(img)=>{
       this.imagepre=reader.result+'';
     };
     reader.readAsDataURL(this.pfimg);
  }
  saveprofile()
  {
    this.profileimg.image=this.imagepre;
    this.profileimg.imagename=this.profile.email;
    if(this.pfimg!=undefined)
    {
    const fd=new FormData();
    fd.append("image",this.pfimg);
    fd.append("email",this.profile.email);
    fd.append("name",this.pfimg.name);
    this.touristservice.createProfileimage(fd).subscribe
     (
        data=>console.log(data)
     );
    }
    this.touristservice.createProfile(this.profile).subscribe
     (
        data=>console.log(data)
     );
     console.log(this.profile);
     console.log(this.profileimg);
     if(this.profileimg.image==null)
      this.profileimg.imagename="avatar";
     this.viewprof.emit({'val':0,'profile':this.profile,'profileimg':this.profileimg});
  }
  close()
  {
    this.dialogref.close();
  }
}

