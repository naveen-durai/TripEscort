import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-error-interceptor',
  templateUrl: './error-interceptor.component.html',
  styleUrls: ['./error-interceptor.component.scss']
})
export class ErrorInterceptorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{message:string}) {
    console.log(data);
   }

  ngOnInit() {
  }

}
