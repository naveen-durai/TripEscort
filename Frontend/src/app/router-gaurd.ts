import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { SigninService } from './Home/signin/signin.service';
import { Injectable } from '@angular/core';
@Injectable()
export class GaurdRoute implements CanActivate
{
    constructor(public signinservice:SigninService,public router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
    {
        const islogin=this.signinservice.isAuthenticated;
        if(!islogin)
            this.router.navigate(['/login']);
        return islogin;
    }
}