import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ErrorInterceptorComponent } from './error-interceptor.component';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor
{
    constructor(private dialog:MatDialog){}
    intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                let err="An error Occured";
                if(error.error)
                 err=error.error;
                console.log(err);
                this.dialog.open(ErrorInterceptorComponent,{width:'500px',data:{message:err}});
                return throwError(error);
            })
        )
    } 
}