import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountService } from "../services/account.service";
import { RestService } from "../services/rest.service";
import { EventsResolverService } from "../services/events-resolver.service"

@NgModule({
    imports: [CommonModule],
    providers: [
        AccountService,
        RestService,
        EventsResolverService
    ]
})
export class ServicesModule {}