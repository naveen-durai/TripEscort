import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig,MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import { SigninService } from '../../signin/signin.service';
@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {
  ngOnInit() {
  }
  constructor(private signinservice:SigninService,private router:Router,private dialogref:MatDialogRef<SignoutComponent>) {}
  sgnout()
  {
    const con=new MatDialogConfig();
    con.disableClose=false;
    this.dialogref.close();
    this.signinservice.logOff();
  }
}
