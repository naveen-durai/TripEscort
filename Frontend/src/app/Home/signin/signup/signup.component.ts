import { Component, OnInit } from '@angular/core';
import { signup } from '../../../class/signup';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { SigninService } from '../signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  icon:string="eye-slash";
  icon1:string="eye-slash";
  pass:string="password";
  pass1:string="password";
  signupsubmit:number=1;
  signup:signup=new signup();
  checkpass:number=0;
  checkconfpass:number=0;
  confirmpassword:string;
  facebookredirect(){
    window.location.href = 'https://www.facebook.com/login/';
  }
  twitterredirect(){
    window.location.href = 'https://twitter.com/login';
  }
  googleredirect(){
    window.location.href = 'https://accounts.google.com/ServiceLogin/identifier?flowName=GlifWebSignIn&flowEntry=AddSession';
  }
  constructor(private signinService:SigninService,private rl:Router){ }

  ngOnInit() {
  }
  changeicon()
  {
    if(this.icon=="eye-slash")
    {
     this.icon="eye";
     this.pass="text";
    }
    else
    {
     this.icon="eye-slash";
     this.pass="password";
    }
  }
  changeicon1()
  {
    if(this.icon1=="eye-slash")
    {
     this.icon1="eye";
     this.pass1="text";
    }
    else
    {
     this.icon1="eye-slash";
     this.pass1="password";
    }
  }
  ckpass()
  {
    this.checkpass=0;
    var count=0,count1=0,count2=0;
    var teststring="!@#$%^&*()_-?/|\{}[]<>";
    if(this.signup.password!=null)
    {
    for(var a=0;a<this.signup.password.length;a++)
    {
     if(!isNaN(parseInt(this.signup.password.charAt(a))))
      count=1;
     if(isNaN(parseInt(this.signup.password.charAt(a))))
      count1=1;
    for(var b=0;b<teststring.length;b++)
    {
     if(this.signup.password.charAt(a)==teststring.charAt(b))
      count2=1;
    }
    }
    if(!count || !count1 || !count2)
     this.checkpass=1;
    }
  }
  onSubmit(data:NgForm,e:Event)
  {
    this.checkconfpass=0;
    this.ckpass();
    if(this.confirmpassword!=null)
    {
    if(this.signup.password!==this.confirmpassword)
     this.checkconfpass=1;
    }
    if(data.invalid || this.checkpass || this.checkconfpass)
    {
      e.preventDefault();
      return;
    }
    this.signinService.createSignup(this.signup)
    .subscribe(data => {
      console.log(data);
      this.rl.navigate(["/login"]);
    },
    error=>{
      console.log(error);
    });
  }
}