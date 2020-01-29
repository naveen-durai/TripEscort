import { Component, OnInit } from '@angular/core';
import {signup} from '../../../class/signup';
import{Title} from '@angular/platform-browser';
import {Router, NavigationExtras} from '@angular/router';
import { Login } from './login.model';
import { SigninService } from '../signin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  titles:string;
  icon:string="eye-slash";
  pass:string="password";
  login:Login={
    email:"",
    password:""
  };
  signup:signup[]=[];
  userdetails:signup;
  constructor(private signinService:SigninService,private title:Title,private router:Router) { }

  ngOnInit() {
  }
  facebookredirect(){
    window.location.href = 'https://www.facebook.com/login/';
  }
  twitterredirect(){
    window.location.href = 'https://twitter.com/login';
  }
  googleredirect(){
    window.location.href = 'https://accounts.google.com/ServiceLogin/identifier?flowName=GlifWebSignIn&flowEntry=AddSession';
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
  loginonSubmit()
  {
    this.signinService.loggedIn(this.login);
  }
  
  public setTitle(title)
  {
    this.title.setTitle(title);
    this.titles=this.title.getTitle();
    console.log(this.titles);
  }
}
