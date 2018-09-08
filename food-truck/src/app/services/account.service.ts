import { Injectable } from "@angular/core";
import { Account } from "../models/account";

@Injectable()
export class AccountService {

    private _accounts: Account[];

    constructor() { 
        this._accounts = [];
    }

    get accounts(): Account[] {
        return this._accounts;
    }

    createAccount(username: string, password: string) {
        const newId = this.getNewId();
        
        const newAccount = new Account(newId, username, password);

        this.addAccount(newAccount);
    }

    addAccount(newAccount: Account) {
        this._accounts.push(newAccount);
    }

    getNewId(): number {
        return this._accounts.length;
    }
}