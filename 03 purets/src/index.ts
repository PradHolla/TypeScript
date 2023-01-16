class User {
    email: string
    name: string
    readonly city: string = "Blr"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const prad = new User('p@p.com', 'Prad')