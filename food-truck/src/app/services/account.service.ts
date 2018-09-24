import { Injectable } from "@angular/core";
import { Account } from "../models/account";

@Injectable()
export class AccountService {

    private _accounts = {};
    private _authenticated = false;

    constructor() {}

    createAccount(username: string, password: string, type: string): Boolean {
        let didCreate = false;

        if (!this._accounts[username]) {
            const newAccount = new Account(username, password, type);
            this._accounts[username] = newAccount;
            didCreate = true;
        }

        return didCreate;
    }

    authenticate(username: string, password: string) {
        if (this._accounts.hasOwnProperty(username)) {
            const selectedUser = this._accounts[username] as Account;
            this._authenticated = (password === selectedUser.password);
        }
    
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