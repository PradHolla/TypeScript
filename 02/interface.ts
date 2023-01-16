interface User {
    name: string
    age: number
    email: string
    someId?: string
    start(): string
    getCoupon(coupon: string): number
}

interface User {
    someField: string
}

interface Admin extends User { // Inheritance
    role: "admin" | "user"
}

const prad: Admin = { name: 'prad', age: 1, email: "p@p.com", someField: "someField", role: "admin",
start() { return "started" }, getCoupon(coupon: "string") { return 1 } }