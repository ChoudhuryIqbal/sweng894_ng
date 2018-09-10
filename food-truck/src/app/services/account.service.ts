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

    createAccount(username: string, password: string, type: string) {
        const id = this._accounts.length;
        const newAccount = new Account(id, username, password, type);

        this._accounts.push(newAccount);
    }
}