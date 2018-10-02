import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Review } from '../../models/review';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    event: Event;
    eventReviewForm: FormGroup;
    reviews : Array<Review>;
    pageReady = false;

    ratings = [
        {rating: 5, text: ' - Excellent'},
        {rating: 4, text: ''},
        {rating: 3, text: ''},
        {rating: 2, text: ''},
        {rating: 1, text: ' - Terrible'}
    ];
    constructor(private eventService: EventService, private route: ActivatedRoute, private fb: FormBuilder) { };

    ngOnInit() {
        this.eventService.getEvent(+this.route.snapshot.params['id']).subscribe((event: Event) => {
            this.event = event;
            console.log(this.event);
            this.eventReviewForm = this.buildFormGroup();
            this.eventService.getReviews(this.event.vendorUsername).subscribe((reviews: Array<Review>) => {
                this.reviews = reviews;
            });
        }); 
          
    }

    onSubmit() {
        console.log(this.eventReviewForm.value);
        const review = new Review(
            this.event.vendorUsername, 
            this.eventReviewForm.value.eventReview,
            this.eventReviewForm.value.eventRating);
        console.log(JSON.stringify(review));
        this.eventService.createReview(JSON.stringify(review)).subscribe((review : Review) => {
            this.reviews.push(review);
        });
    }

    private buildFormGroup(): FormGroup {
        return this.fb.group({
            eventReview: ['', Validators.maxLength(140)],
            eventRating: ['', Validators.required]
        });
    }
}
