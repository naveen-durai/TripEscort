import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  titles:any;
  constructor(private title:Title) { }

  ngOnInit() {
  }
  public setTitle(title)
  {
    this.title.setTitle(title);
    this.titles=this.title.getTitle();
    console.log(this.titles);
  }
}
