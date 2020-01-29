import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login/login.model';
import { Observable, Subject } from 'rxjs';
import { signup } from 'src/app/class/signup';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private baseUrl = window["cfgApiBaseUrl"] + "/api/tourist";
  private tokenlistener=new Subject<boolean>();
  private token;
  public isAuthenticated:boolean=false;
  tokenTimer:any;
  constructor(private http: HttpClient,private router:Router) {
   }
  getToken()
  {
    return this.token;
  }
  getTokenListener()
  {
    return this.tokenlistener.asObservable();
  }
  loggedIn(login:Object) {
    this.http.post<{token:string,expiresIn:number,userId:string,username:string,email:string}>(`${this.baseUrl}`+`/login`,login)
      .subscribe(Response=>{
        if(Response.token)
        {
          this.tokenlistener.next(true);
          this.isAuthenticated=true;
          const now=new Date();
          const expiresIn=new Date(now.getTime()+Response.expiresIn*1000);
          this.setAuth(Response.token,expiresIn,Response.userId,Response.username,Response.email);
          this.setAuthTimer(Response.expiresIn*1000);
          this.getAuth();
          this.router.navigate(["/tour"]);
        }
      },
      error=>{
        this.tokenlistener.next(false);
        this.isAuthenticated=false;
      });
  }
  createSignup(signup: signup): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/signup`, signup,{ responseType: 'text' as 'json' });
  }
  logOff()
  {
    console.log("lf");
    this.clearLs();
    this.tokenlistener.next(false);
    this.isAuthenticated=false;
    clearTimeout(this.tokenTimer);
    this.router.navigate(["/home"]);
  }
  autoAuth()
  {
    const data=this.getAuth();
    if(!data)
     return;
    const now=new Date();
    const expiresIn=data.expiresIn.getTime()-now.getTime();
    if(expiresIn>0)
    {
      this.token=data.token;
      this.setAuthTimer(expiresIn);
      this.tokenlistener.next(true);
      this.isAuthenticated=true;
    }
  }
  setAuthTimer(duration:number)
  {
    this.tokenTimer=setTimeout(() => {
      this.logOff();
      window.location.reload();
    }, duration);
  }
  getAuth()
  {
    const token=localStorage.getItem("token");
    const expiresIn=localStorage.getItem("expiresIn");
    const username=localStorage.getItem("username");
    const email=localStorage.getItem("email");
    if(!this.token && !expiresIn)
     return;
    else{
      return {
        token:token,
        expiresIn:new Date(expiresIn),
        username:username,
        email:email
      };
    }
  }
  private setAuth(token:string,expiresIn:Date,userId:string,username:string,email:string)
  {
    localStorage.setItem("token",token);
    localStorage.setItem("expiresIn",expiresIn.toISOString());
    localStorage.setItem("userId",userId);
    localStorage.setItem("username",username);
    localStorage.setItem("email",email);
  }
  private clearLs()
  {
    console.log("clear");
    // localStorage.removeItem("token");
    // localStorage.removeItem("expiresIn");
    // localStorage.removeItem("userId");
    // localStorage.removeItem("username");
    localStorage.clear();
  }
}
