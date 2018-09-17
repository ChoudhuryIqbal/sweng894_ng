import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Vendor } from '../../models/vendor';
import { VendorService } from '../../services/vendor.service';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
	menu : string;
	images : File;
	submitted = false;
	categories=['Italian', 'American', 'Mexican']
	model = new Vendor(null, null, null, null, null, null, null);

	constructor(private formBuilder: FormBuilder, private vendorService: VendorService) {}

	onSubmit() {
		this.submitted = true;
	}
	onMenuUpload(event) {
		this.menu = event.target.files[0].toString()
	}
	onImageUpload(event) {
		this.images = event.target.files[0]
	}

	createVendorProfile(){
		this.vendorService.createVendorProfile(1, this.model.name, this.model.foodType, this.model.description, this.model.menu, this.model.images)
	}
	

}
