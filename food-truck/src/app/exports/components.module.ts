import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CreateAccountComponent } from "../pages/create-account/create-account.component";
import { CreateEventComponent } from "../pages/create-event/create-event.component";
import { LoginComponent } from "../pages/login/login.component"
import { EventsComponent } from '../pages/events/events.component';
import { EventDetailsComponent } from '../pages/event-details/event-details.component';
import { EventsFilterPipe } from '../filters/eventsFilterPipe';
import { VendorDetailsComponent } from '../pages/vendor-details/vendor-details.component';
import { ReviewsComponent } from '../pages/reviews/reviews.component';
import { VendorComponent } from '../pages/vendor/vendor.component';
import { NavbarComponent } from "../pages/navbar/navbar.component";
import { CreateVendorComponent } from "../pages/create-vendor/create-vendor.component";

const Components = [
    CreateAccountComponent,
    CreateEventComponent,
    LoginComponent,
    EventsComponent,
    EventDetailsComponent,
    EventsFilterPipe,
    VendorDetailsComponent,
    ReviewsComponent,
    VendorComponent, 
    NavbarComponent,
    CreateVendorComponent
];

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgbModule],
    declarations: [Components],
    exports: [Components, CommonModule]
})
export class ComponentsModule {}