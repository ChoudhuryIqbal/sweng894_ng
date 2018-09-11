import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Vendor } from '../../models/vendor';
import { VendorProfileService } from '../../services/vendorProfile.service';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
	menu : File;
	images : File;
	submitted = false;
	categories=['Italian', 'American', 'Mexican']
	model = new Vendor(null, null, null, null, null);

	constructor(private formBuilder: FormBuilder, private vendorProfileService: VendorProfileService) {}

	onSubmit() {
		this.submitted = true;
	}
	onMenuUpload(event) {
		this.menu = event.target.files[0]
	}
	onImageUpload(event) {
		this.images = event.target.files[0]
	}

	createVendorProfile(){
		this.vendorProfileService.createVendorProfile(this.model.foodTruckName, this.model.foodType, this.model.menu, this.model.images)
		console.log(this.vendorProfileService.vendors);
	}
	

}
