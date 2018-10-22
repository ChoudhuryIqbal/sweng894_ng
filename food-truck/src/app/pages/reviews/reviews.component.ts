import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-reviews',
  inputs : ['vendorUsername'],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews : Array<Review>;
  loggedInUser : string;
  eventReviewForm: FormGroup;
  vendorUsername : string;
  ratings = [
    {rating: 5, text: ' - Excellent'},
    {rating: 4, text: ''},
    {rating: 3, text: ''},
    {rating: 2, text: ''},
    {rating: 1, text: ' - Terrible'}
];
  constructor(private eventService: EventService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedInUser = sessionStorage.getItem("username");
    this.eventService.getReviews(this.vendorUsername).subscribe((reviews : Array<Review>) => {
        this.reviews = reviews;
        this.eventReviewForm = this.buildFormGroup();
    });
  }

  onSubmit() {
    console.log(this.eventReviewForm.value);
    if (this.eventReviewForm.valid) {
        this.eventService.createReview(JSON.stringify(this.eventReviewForm.value)).subscribe((review : Review) => {
            this.reviews.push(this.eventReviewForm.value);
            console.log(review);
            this.eventReviewForm.reset();
        });
    }
  }

  private buildFormGroup(): FormGroup {
      return this.fb.group({
          loggedInUser : [this.loggedInUser],
          vendorUsername: [this.vendorUsername],
          comment: ['', Validators.maxLength(140)],
          rating: ['', Validators.required]
      });
  }
}
