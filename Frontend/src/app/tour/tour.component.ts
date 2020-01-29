import { Component, OnInit } from '@angular/core';
import { TouristService } from 'src/Service/tourist.service';
import { Tour } from '../class/tour';
import { Router, NavigationExtras } from '@angular/router';
import { Tourrating } from '../class/tourrating';
import { SigninService } from '../Home/signin/signin.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  currentrate: number;
  mailid: string;
  rated: number = 0;
  page: number = 0;
  navpage: number = 0;
  tour: Tour[] = [];
  tourrating: Tourrating = new Tourrating();
  tourrate: Tourrating[] = [];
  tourclass: Tour = new Tour();
  pages: Array<any>;
  filtertype: string=null;
  i: number = 0;
  j: number = 0;
  pageclick:number=0;
  district: any = ['Ramanathapuram', 'Dindigul', 'Kanchipuram', 'Nilgiris', 'Dharmapuri', 'Kaniyakumari'];
  ptype: any = ['Beach', 'Holly Place', 'Water Falls', 'Lake', 'Hill Station', 'Park', 'River', 'Statue', 'Bridge'];
  prevpage: number = -1;
  nextpage: number = 1;
  readonly: boolean = false;
  key: string;
  reverse: boolean = false;
  insrating:number=0;
  islogin:boolean=false;
  constructor(private touristservice: TouristService,private signinservice: SigninService, private router: Router) { }
  
  ngOnInit() {
    this.islogin=this.signinservice.isAuthenticated;
    this.signinservice.getTokenListener().subscribe(res=>{
      this.islogin=res;
    });
    this.touristservice.getrating().subscribe(
      data => { this.tourrate = data },
      )
      if (this.filtertype==null)
      this.getTourspot();
    }
    setpage(p, event) {
      event.preventDefault();
      this.pageclick=1;
      if(p<0)
      p=this.pages.length-1;
      if(p>this.pages.length-1)
      p=0;
      (document.querySelector('.pageclk'+this.page) as HTMLElement).style.backgroundColor="white";
      (document.querySelector('.pageclk'+this.page) as HTMLElement).style.color="#17a2b8";
      (document.querySelector('.pageclk'+p) as HTMLElement).style.backgroundColor="#17a2b8";
      (document.querySelector('.pageclk'+p) as HTMLElement).style.color="white";
      this.page = p;
      this.navpage = p;
      if(this.filtertype==null)
      this.getTourspot();
      else if(this.filtertype=="filter")
      this.filterapply();
      // else if(this.filtertype=="subspottype")
      //  this.subspottype();
      else if(this.filtertype=="popularity")
      this.sortpopularity();
      
    }
    getTourspot() {
      this.touristservice.gettourList(this.page).subscribe(
        data => {
          this.tour = data['content'],
          this.pages = new Array(data['totalPages'])
        }
        )
        this.filtertype=null;
      }
      toggleVisibilitydistrict(event, a) {
        if (event.target.checked) {
          this.tourclass.district[this.i] = a;
          this.i++;
        }
        if (!event.target.checked) {
          this.tourclass.district.splice(this.tourclass.district.indexOf(a), 1);
          this.i--;
        }
      }
      toggleVisibilityspottype(event, a) {
        if (event.target.checked) {
          this.tourclass.spottype[this.j] = a;
          this.j++;
        }
        if (!event.target.checked) {
          this.tourclass.spottype.splice(this.tourclass.district.indexOf(a), 1);
          this.j--;
        }
      }
      filter()
      {
        this.pageclick=0;
        this.filtertype = "filter";
        this.filterapply();
      }
      filterapply() {
        if(!this.pageclick)
        {
          this.page=0;
          this.navpage=0;
        }
        this.touristservice.getfilter(this.tourclass.district,this.tourclass.spottype,this.page,this.filtertype).subscribe(
          data => {
            this.tour = data['content'],
            this.pages = new Array(data['totalPages'])
          })
        }
        bookhotel() {
          if (this.islogin) {
            window.location.href = "http://localhost/hotel/index.php";
          }
          else {
            this.router.navigate(["/app-login"]);
          }
        }
        bookcab() {
          if (this.islogin) {
            this.router.navigate(["/app-cab"]);
          }
          else {
            this.router.navigate(["/app-login"]);
          }
        }
        rating(spotname) {
          if (this.islogin) {
            this.tourrating.spotname = spotname;
            this.tourrating.mailid = this.mailid;
            this.tourrating.rating = this.currentrate;
            this.touristservice.createrating(this.tourrating).subscribe(
              data => { this.rated = 1 })
              this.touristservice.getrating().subscribe(
                data => { this.tourrate = data },
                )
                setTimeout(()=>{
                  this.touristservice.gettourList(this.page).subscribe(
                    data => {
                      this.tour = data['content']
                    }
                    )
                  },500)
                }
                else {
                  this.router.navigate(["/app-login"]);
                }
              }
              updatedrating(spotname) {
                if (this.currentrate != 0 && this.tourrating.spotname==spotname) {
                  this.insrating = 1;
                }
                this.readonly = false;
                var count = 0;
                for (var i = 0; i < this.tour.length; i++) {
                  if (this.tour[i].spotname == spotname)
                  this.currentrate = this.tour[i].rating;
                }
                this.touristservice.getrating().subscribe(
                  data => { this.tourrate = data })
                  this.tourrate.forEach((a) => {
                    if (a.spotname == spotname && a.mailid == this.mailid)
                    count = 1;
                  })
                  if ((this.currentrate != 0 && count) || this.insrating) {
                    this.readonly = true;
                    this.rated = 1;
                  }
                  else
                  this.rated = 0;
                  this.insrating=0;
                }
                dpdown(e) {
                  e.stopPropagation();
                }
                sortpopularity() {
                  this.filtertype = "popularity";
                  this.filterapply();
                }
              }
