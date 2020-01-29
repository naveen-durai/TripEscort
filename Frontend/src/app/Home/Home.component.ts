import { Component, OnInit } from '@angular/core';
import {TouristService} from "../../Service/tourist.service";
import {Title} from '@angular/platform-browser';
import {Image} from '../class/home-image';
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  titles:string;
  tes:string="Hello";
  image:Image[];
  constructor(private title:Title){
  }

  ngOnInit() {
    this.image=[
      {url:"../../assets/Carousel/Aathirappally-waterfalls-in-Kerala.jpg",alt:"First slide",title:"Aathirappally waterfalls"},
      {url:"../../assets/Carousel/Agra-fort-Uttar Pradesh.jpg",alt:"Second slide",title:"Agra fort"},
      {url:"../../assets/Carousel/Backwater-Kerala.jpg",alt:"Third slide",title:"Backwate"},
      {url:"../../assets/Carousel/tajmahal.jpg",alt:"Fourth slide",title:"Taj Mahal"},
      {url:"../../assets/Carousel/Chola-Temple-Thanjavur.jpg",alt:"Fifth slide",title:"Chola Temple"},
      {url:"../../assets/Carousel/Gateway-of-India-Mumbai.jpg",alt:"Sixth slide",title:"Gateway of India"},
      {url:"../../assets/Carousel/Ghats-at-Varanasi-Uttar Pradesh.jpg",alt:"Seventh slide",title:"Ghats at Varanasi"},
      {url:"../../assets/Carousel/Golden-Temple-Amritsar.jpg",alt:"Eighth slide",title:"Golden Temple"},
      {url:"../../assets/Carousel/Gwalior-fort-Gwalior.jpg",alt:"Nineth slide",title:"Gwalior fort"},
      {url:"../../assets/Carousel/Kodaikanal-lake.jpg",alt:"Tenth slide",title:"Kodaikanal lake"},
    ]
  }
  // public setTitle(title)
  // {
  //   this.title.setTitle(title);
  //   this.titles=this.title.getTitle();
  //   console.log(this.titles);
  // }
}
