import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Feedback } from 'src/app/class/feedback';
import { TouristService } from 'src/Service/tourist.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedback:Feedback=new Feedback();
  feedbacksubmit:number=1;
  fillfield: boolean=false;
  checkmail: number=0;
  data:string[];
  urldetail: any;
  constructor(private touristService:TouristService,private usrdetail:ActivatedRoute) { }

  ngOnInit() {
    this.touristService.users=this.usrdetail.snapshot.queryParams['userdetail'];
    //this.urldetail=this.touristService.users;
    this.data=this.touristService.users.split("&");
    this.feedback.name=this.data[0];
    this.feedback.mail=this.data[1];
    console.log("Feedback "+this.feedback.name+" "+this.feedback.mail);
  }
  onSubmit()
  {
    this.feedbacksubmit=0;
    var count=0,count1=0,count2=0,count3=0,count4=0;
    if(this.feedback.name==null || this.feedback.mail==null  || this.feedback.phoneno==null)
       this.fillfield=true;
    if (this.feedback.mail != null) {
      for (var a = 0; a < this.feedback.mail.length; a++) {
        if (this.feedback.mail.charAt(a) == '@')
          count = 1;
        if (this.feedback.mail.charAt(a) == '.')
          count1 = 1;
      }
      if (!count || !count1)
        this.checkmail = 1;
    }
      if( !this.fillfield && !this.checkmail)
      {
        this.touristService.createfeedback(this.feedback)
          .subscribe(data => console.log(data), error => console.log(error));
        this.feedback = new Feedback();
      }
  }
}
