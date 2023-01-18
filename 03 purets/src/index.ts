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

    protected _courseCount = 1

    constructor(
        public email: string, 
        public name: string,
        private readonly city: string = "Blr"
        ) {
    }

    private deleteToken() {
        console.log('delete token')
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(value: number) {
        this._courseCount = value
    }
}

class subUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 2
    }
}

const prad = new User('p@p.com', 'Prad')