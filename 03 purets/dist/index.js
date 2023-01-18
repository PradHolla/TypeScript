"use strict";
// class User {
//     public email: string
//     name: string
//     private readonly city: string = "Blr"
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }
class User {
    constructor(email, name, city = "Blr") {
        this.email = email;
        this.name = name;
        this.city = city;
        this._courseCount = 1;
    }
    deleteToken() {
        console.log('delete token');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        this._courseCount = value;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 2;
    }
}
const prad = new User('p@p.com', 'Prad');
