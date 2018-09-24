import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl  } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
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
var event-id=0;
@ViewChild('search') public searchElement: ElementRef;


constructor(private formBuilder: FormBuilder,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone , private createeventservice: CreateEventService) {}

ngOnInit() {
  this.orderForm = this.formBuilder.group({
    item: '',
    price: '',
    items: this.formBuilder.array([ this.createItem() ])
    });
  this.registerForm = this.formBuilder.group({
    Truck: new FormControl(),
    sales: new FormControl(),
    fromdate: new FormControl(),
    fromtime: new FormControl(),
    totime: new FormControl(),
    todate: new FormControl(),
    items: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    location: new FormControl(),
  });
  this.mapsAPILoader.load().then(() => {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });
    autocomplete.addListener("place_changed", () => {
    this.ngZone.run(() => {
      let place: google.maps.places.PlaceResult = autocomplete.getPlace();
      if(place.geometry === undefined || place.geometry === null )
        {
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
    this.event-id = this.event-id+1;
    var value = this.registerForm.value;
    this.CreateEventService.saveData(value);
  }
}

