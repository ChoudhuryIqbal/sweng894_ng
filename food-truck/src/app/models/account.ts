// export class Account {
//     id: number;
//     username: string;
//     password: string;

//     constructor(id: number, username: string, password: string) {
//         this.id = id;
//         this.username = username;
//         this.password = password;
//     }
// }

export class Account {
    constructor(public id: number, public username: string, public password: string, public type: string) {}
}