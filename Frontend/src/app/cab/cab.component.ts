import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TouristService } from 'src/Service/tourist.service';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.scss']
})
export class CabComponent implements OnInit {

  constructor(private touristservice:TouristService,private usrdetail:ActivatedRoute) { }

  ngOnInit() {
    this.touristservice.users=this.usrdetail.snapshot.queryParams['userdetail'];
  }
  redirect()
  {
    window.location.href="http://fasttrackcalltaxi.in/#/";
  }
}
