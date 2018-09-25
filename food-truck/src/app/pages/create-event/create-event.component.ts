import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { CreateEventService } from '../../services/create-event.service';

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

    orderForm: FormGroup;
    items: FormArray;
    registerForm: FormGroup;
    eventId = 0;
    @ViewChild('search') searchElement: ElementRef;

    constructor(private formBuilder: FormBuilder, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private createEventService: CreateEventService) { }

    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            item: '',
            price: '',
            items: this.formBuilder.array([this.createItem()])
        });

        this.registerForm = this.formBuilder.group({
            saleDescription: new FormControl(),
            start: new FormControl(),
            end: new FormControl(),
            address: new FormControl(),
        });

        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ["address"] });

            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    }

    createItem(): FormGroup {
        return this.formBuilder.group({
            name: '',
            price: ''
        });
    }

    addItem(): void {
        this.items = this.orderForm.get('items') as FormArray;
        this.items.push(this.createItem());
    }

    onSubmit() {
    var value = this.registerForm.value;
    this.getevents(value);

  }

getevents(value){
      this.eventservice.getEvents<any[]>()
            .subscribe((data: any[]) => this.registerForm.value = data,
              this.router.navigate(['/events']);)

}
}
