import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
orderForm: FormGroup;
items: FormArray;
@ViewChild('search') public searchElement: ElementRef;


constructor(private formBuilder: FormBuilder,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

ngOnInit() {
  this.orderForm = this.formBuilder.group({
    customerName: '',
    email: '',
    items: this.formBuilder.array([ this.createItem() ])
  });
  this.mapsAPILoader.load().then(() => {
         let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });
    autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
           let place: google.maps.places.PlaceResult = autocomplete.getPlace();
           if(place.geometry === undefined || place.geometry === null ){
            return;
           }
          });
          });
        }
           );
}
createItem(): FormGroup {
  return this.formBuilder.group({
    name: '',
    description: '',
    price: ''
  });
}
geolocation(){
  console.log(123)
}
addItem(): void {
  this.items = this.orderForm.get('items') as FormArray;
  this.items.push(this.createItem());
}


}

