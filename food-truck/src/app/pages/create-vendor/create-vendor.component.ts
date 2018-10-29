import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Vendor } from 'src/app/models/vendor';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.scss']
})
export class CreateVendorComponent implements OnInit {
  loggedInUser : string;
  vendorDetailsForm: FormGroup;
  model = new Vendor('', '', '','', []);
  displayError = false;
  newItem = new MenuItem(null, null);
  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.loggedInUser = sessionStorage.getItem("username");

		this.vendorDetailsForm = this.fb.group({
      username : [''],
			name: ['', Validators.maxLength(300)],
			foodType:['', Validators.maxLength(200)],
			description: ['', Validators.maxLength(300)],
			menu: this.fb.array([
				this.fb.control('')
			])
		});
  }
  get menuItems() {
		return this.vendorDetailsForm.get('menu') as FormArray;
  }
  
  addItem() {
		this.menuItems.push(this.fb.control(''));
	}

	removeItem(index: number) {
		this.menuItems.removeAt(index);
  }
  
  onSubmit(){
    if (!this.menuItems.pristine) {
			this.model.menu = this.menuItems.value;
    }
    this.displayError = false;
    this.vendorDetailsForm.patchValue({"username": this.loggedInUser});
		this.accountService.createVendor(JSON.stringify(this.vendorDetailsForm.value)).subscribe((vendor : Vendor) => {
			this.router.navigate(['/vendor/' + this.loggedInUser]);
		},
		error => this.displayError = true);
  }

}
