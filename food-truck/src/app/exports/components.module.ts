import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CreateAccountComponent } from "../pages/create-account/create-account.component";
import { CreateEventComponent } from "../pages/create-event/create-event.component";
import { EditProfileComponent } from "../pages/edit-profile/edit-profile.component";
import { LoginComponent } from "../pages/login/login.component"
import { HomeComponent } from "../pages/home/home.component";
import { EventsComponent } from '../pages/events/events.component';
import { EventDetailsComponent } from '../pages/event-details/event-details.component';
import { EventsFilterPipe } from '../filters/eventsFilterPipe';

const Components = [
    CreateAccountComponent,
    CreateEventComponent,
    EditProfileComponent,
    LoginComponent,
    HomeComponent,
    EventsComponent,
    EventDetailsComponent,
    EventsFilterPipe
];

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    declarations: [Components],
    exports: [Components, CommonModule]
})
export class ComponentsModule {}