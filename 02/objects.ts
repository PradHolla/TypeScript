const User = {
    name: 'John',
    email: 'p@p.com',
    isActive: false
}

function createUser({name: string, isActive: boolean}){}


function createRecord():{name: string, isActive: boolean}{ // Function Name, return type, function body
    return {name: 'prad', isActive: true}
}

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credCardInfo?: number
}


let myUser: User = {
    _id: '123',
    name: 'John',
    email: 'john@gmail.com',
    isActive: true
}


type cardNum = {
    cardNum: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNum & cardDate & {
    cardcvv: number // Not a great practice
}

export {}