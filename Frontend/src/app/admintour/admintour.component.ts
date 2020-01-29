import { Component, OnInit } from '@angular/core';
import { TouristService } from 'src/Service/tourist.service';
import { Tour } from '../class/tour';

@Component({
  selector: 'app-admintour',
  templateUrl: './admintour.component.html',
  styleUrls: ['./admintour.component.scss']
})
export class AdmintourComponent implements OnInit {
  tour:Tour=new Tour();
  constructor(private touristser:TouristService) { }

  ngOnInit() {
  }
  onSubmit()
  {
    this.touristser.createTour(this.tour)
    .subscribe(data => console.log(data), error => console.log(error));
  }
}
