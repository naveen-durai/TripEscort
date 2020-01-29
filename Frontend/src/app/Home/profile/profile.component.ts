import { Component, OnInit } from '@angular/core';
import {TourComponent} from '../../tour/tour.component';
import {ActivatedRoute, Router} from '@angular/router';
import { TouristService } from 'src/Service/tourist.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private touristser:TouristService,private usrdetail:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.touristser.users=this.usrdetail.snapshot.queryParams['userdetail'];
  }

}
