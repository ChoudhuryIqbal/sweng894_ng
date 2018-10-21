import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { AccountService } from '../../services/account.service';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Review } from '../../models/review';
import { Observable, forkJoin } from 'rxjs';
import { Vendor } from '../../models/vendor';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  vendor : Vendor;
  reviews : Array<Review>;
  pageReady = false;
  avgRating = 0;
  loggedInUser : string;

  @Input() 
  vendorUsername : string;

  constructor(private eventService: EventService, private accountService :AccountService, private route: ActivatedRoute, private fb: FormBuilder) { };

  ngOnInit() {
      this.loggedInUser = sessionStorage.getItem("username");
      const vendorObservable: Observable<Vendor> = this.accountService.getVendorDetails(this.vendorUsername);
      const reviewsObservable: Observable<Array<Review>> = this.eventService.getReviews(this.vendorUsername);
      
      forkJoin(vendorObservable, reviewsObservable).subscribe(
          ([vendor, reviews]: [Vendor, Array<Review>]) => {
              this.reviews = reviews;
              this.vendor = vendor;
              reviews.forEach(review => {
                  this.avgRating += review.rating;
              });
              this.avgRating = this.avgRating/this.reviews.length;
          }
      );
  }

}
