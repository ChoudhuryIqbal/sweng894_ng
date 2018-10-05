import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Review } from '../../models/review';
import { Observable, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { switchMapTo, flatMap, concatMap, mergeMap, map } from 'rxjs/operators';

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
    avgRating = 0;

    ratings = [
        {rating: 5, text: ' - Excellent'},
        {rating: 4, text: ''},
        {rating: 3, text: ''},
        {rating: 2, text: ''},
        {rating: 1, text: ' - Terrible'}
    ];
    constructor(private eventService: EventService, private route: ActivatedRoute, private fb: FormBuilder) { };

    ngOnInit() {
        const eventObservable: Observable<Event> = this.eventService.getEvent(+this.route.snapshot.params['id']);
        const reviewsObservable: Observable<Array<Review>> = eventObservable.pipe(
            switchMap((event: Event) => this.eventService.getReviews(event.vendorUsername))
        );
        
        forkJoin(eventObservable, reviewsObservable).subscribe(
            ([event, reviews]: [Event, Array<Review>]) => {
                this.event = event;
                this.reviews = reviews;
                this.eventReviewForm = this.buildFormGroup();
                reviews.forEach(review => {
                    this.avgRating += review.rating;
                });
                this.avgRating = this.avgRating/this.reviews.length;
            }
        );
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
            vendorUsername: [this.event.vendorUsername],
            comment: ['', Validators.maxLength(140)],
            rating: ['', Validators.required]
        });
    }
}
