import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';
import { VendorService } from '../../services/vendor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {
  vendor : any
  constructor(private vendorService : VendorService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.vendor = this.vendorService.getVendor(+this.route.snapshot.params['id'])
  }
}
