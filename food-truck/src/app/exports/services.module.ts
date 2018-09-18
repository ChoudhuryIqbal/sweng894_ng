import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountService } from "../services/account.service";
import { RestService } from "../services/rest.service";
import { VendorProfileService } from "../services/vendor-profile.service";

@NgModule({
    imports: [CommonModule],
    providers: [
        AccountService,
        RestService,
        VendorProfileService
    ]
})
export class ServicesModule {}