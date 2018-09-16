import { Injectable } from "@angular/core";
import { Account } from "../models/account";

@Injectable()
export class AccountService {

    private _accounts = {};

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
}