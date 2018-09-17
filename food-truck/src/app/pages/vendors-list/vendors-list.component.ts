import { Component, OnInit } from '@angular/core';
import{ Vendor } from "../../models/vendor"
import { VendorService } from "../../services/vendor.service"
import { VendorListResolver } from "../../services/vendor-list-resolver.service"

@Component({
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.scss']
})
export class VendorsListComponent implements OnInit {
  vendors : any
  constructor(private vendorService : VendorService) { }

  ngOnInit() {
    this.vendors = this.vendorService.getVendors()
    }
    
}

