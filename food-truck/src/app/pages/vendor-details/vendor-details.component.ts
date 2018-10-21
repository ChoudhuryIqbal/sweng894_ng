import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { AccountService } from '../../services/account.service';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {
  loggedInUser : string;
  vendorUsername : string;

  constructor(private eventService: EventService, private accountService :AccountService, private route: ActivatedRoute, private fb: FormBuilder) { };

  ngOnInit() {
      this.loggedInUser = sessionStorage.getItem("username");
      this.vendorUsername = this.route.snapshot.params['username'];
  }

}
