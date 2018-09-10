import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
public items =["Mango","Banana","Pineapple","Strawberry","Kiwi","Grapefruit","Blueberries","Lemons"];
public dateTimeRange: Date[];
  constructor() { }

  ngOnInit() {
  }

}
