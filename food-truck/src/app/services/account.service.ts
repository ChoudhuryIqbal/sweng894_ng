import { Injectable } from "@angular/core";
import { Account } from "../models/account";
import { RestService } from "./rest.service";
import { Observable, of } from 'rxjs';

@Injectable()
export class AccountService {

    private _accounts = {};
    private _authenticated = false;
    account : Account;

    constructor(private restService: RestService) {}

    createAccount(payload : any): Observable<Account>{
        return this.restService.post('/api/createAccount/', payload);
    }

    getAccount(username: string) : Observable<Account>{
        return this.restService.get('/api/getAccount/' + username);
    }

    authenticate(username: string, password: string) {
        this.getAccount(username).subscribe((account : Account) => {
            if(account) {
                this._authenticated = (password === account.password);
            }
		})
    
        return this._authenticated;
    }

    reset() {
        this._accounts = {};
    }

    get authenticated(): boolean {
        return this._authenticated;
    }

    get accounts(): any {
        return this._accounts;
    }
}