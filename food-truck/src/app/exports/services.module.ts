import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountService } from "../services/account.service";
import { RestService } from "../services/rest.service";
import { EventsResolverService } from "../services/events-resolver.service"
import { EventService } from "../services/event.service"
import { Vendor } from "../models/vendor"

@NgModule({
    imports: [CommonModule],
    providers: [
        AccountService,
        RestService,
        EventsResolverService,
        EventService,
        Vendor
    ]
})
export class ServicesModule {}